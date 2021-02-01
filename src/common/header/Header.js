import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import './Header.css';

class Header extends Component {

    render() {
        return (
            <div className="container">
                <div className="header">Image Viewer</div>
                <div className="searchBox">
                    <SearchIcon style={{ color: "black" }} />
                    <Input disableUnderline={true} placeholder="Search" />
                </div>
            </div>);
    }
}

export default Header