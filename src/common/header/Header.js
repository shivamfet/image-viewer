import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import './Header.css';
import logo from '../../assets/upgrad_logo.svg';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            isLoggedIn : sessionStorage.getItem("access-token") === null ? false : true
        }
        console.log(this.state);
        
    }

    render() {
        return (
            <div>
                {this.state.isLoggedIn &&
                    <div className="container">
                        <div className="header">Image Viewer</div>
                        <div className="search_profile">
                            <div className="searchBox">
                                <SearchIcon style={{ color: "black" }} />
                                <Input disableUnderline={true} placeholder="Search" />
                            </div>
                            <IconButton>
                                <Avatar src={logo} alt="Profile pic" />
                            </IconButton>
                        </div>
                    </div>
                }
                {
                    !this.state.isLoggedIn &&
                    <div style={{backgroundColor : "#263238" , fontSize : "18px" , padding : "10px" , color : "#fff"}}>
                        Image Viewer
                    </div>
                }
            </div>
        );
    }
}

export default Header