import React, { Component } from 'react';
import './Home.css';
import Header from '../../common/header/Header';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Card from '@material-ui/core/Card';
import { CardContent, CardHeader } from '@material-ui/core';
import logo from '../../assets/upgrad_logo.svg';
import Avatar from '@material-ui/core/Avatar';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            mediaIds: [],
            mediaInfos: []
        }
    }

    componentWillMount() {
        let token = sessionStorage.getItem('access-token');
        console.log(token);

        let response = null
        let data = null;

        let that = this;
        let xhrImages = new XMLHttpRequest();


        let mediaIds = [];


        xhrImages.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                response = JSON.parse(this.responseText);
                data = response.data;
                for (var i = 0; i < data.length; i++) {
                    console.log(data[i].id);
                    mediaIds.push(data[i].id);
                }
                that.setState({ mediaIds: mediaIds })
                console.log(that.state);
            }
        })

        xhrImages.open("GET", "https://graph.instagram.com/me/media?fields=id,caption&access_token=" + token);
        xhrImages.send();


        let mediaIdInfo = null;
        let xhrMediaInfo = [];
        setTimeout(function () {

            for (var i = 0; i < that.state.mediaIds.length; i++) {
                xhrMediaInfo[i] = new XMLHttpRequest();
                xhrMediaInfo[i].addEventListener("readystatechange", function () {
                    if (this.readyState === 4) {
                        console.log("here");
                        mediaIdInfo = JSON.parse(this.responseText);
                        console.log(mediaIdInfo);
                        let x = that.state.mediaInfos.slice();
                        x.push(mediaIdInfo);
                        that.setState({ mediaInfos: x });
                        console.log(that.state);
                    }
                })
                xhrMediaInfo[i].open("GET", "https://graph.instagram.com/" + that.state.mediaIds[i] + "?fields=id,media_type,media_url,username,timestamp&access_token=" + token);
                xhrMediaInfo[i].send();
            }
        }, 5000);


    }


    render() {
        return (<div>
            <Header />
            <GridList cellHeight = {"auto"} cols={2} >
            {this.state.mediaInfos.map(mediaInfo => (
                <GridListTile key={mediaInfo.id}>
                    <Card style={{width : "100%" , height : "100%" , margin : "auto"}}>
                    <CardHeader
                        avatar={
                            <Avatar src={logo} alt="Profile pic"/>
                        }
                        title={mediaInfo.username}
                        subheader={mediaInfo.timestamp}/>
                    
                    <CardContent>
                        <img src={mediaInfo.media_url} alt="pic"/>
                        <hr></hr>
                        <span style = {{color : "blue"}}>#pgdsd #upgrad</span>
                        <br/><br/>
                        <FavoriteBorderIcon></FavoriteBorderIcon><br/>
                   
                        <Input placeholder="Add Comment"/>
                        
                        <Button  style = {{marginLeft : "10px"}} variant="contained" color="primary">Add</Button>
                   
                        

                    </CardContent>
                </Card>
                </GridListTile>
                
            ))}


            </GridList>
            
        </div>)
    }

}

export default Home