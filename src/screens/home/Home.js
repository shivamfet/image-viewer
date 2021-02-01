import SelectInput from '@material-ui/core/Select/SelectInput';
import React, { Component } from 'react';
import Header from '../../common/header/Header';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

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
        let mediaIdInfos = [];

        let mediaIdInfo = null;

        xhrImages.addEventListener("readystatechange", function () {
            if (this.readyState == 4) {
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

        setTimeout(() => {
            let xhrMediaInfo = [];
            for (var i = 0; i < that.state.mediaIds.length; i++) {
                console.log("hi");
                console.log(that.state.mediaIds[i]);
                xhrMediaInfo[i] = new XMLHttpRequest();
                xhrMediaInfo[i].addEventListener("readystatechange", function () {
                    if (this.readyState == 4) {
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
            }} , 5000);


    }


    render() {
        return (<div>
            <Header showSearchButton="true" showUserIcon="true"/>
            <GridList cellHeight={"auto"} cols={2}>
                {this.state.mediaInfos.map(mediaInfo => (
                    <GridListTile key={"movie" + mediaInfo.id}>
                        <img src={mediaInfo.media_url} alt={mediaInfo.media_type} />
                        {/* <GridListTileBar
                            title={movie.title}
                            subtitle={<span>Release Date: {new Date(movie.release_date).toDateString()}</span>}
                        />  */}
                    </GridListTile>
                ))}
            </GridList>
        </div>)
    }

}

export default Home