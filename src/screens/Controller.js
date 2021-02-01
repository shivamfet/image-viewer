import React from 'react';
import { Component } from 'react';
import Home from './home/Home';
import Login from './login/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class Controller extends Component {

    constructor() {
        super();
        this.baseUrl = "https://graph.instagram.com/";
    }

    render() {
        return (
            <Router>
                <div className="main-container">
                    <Route exact path='/' render={(props) => <Login {...props} baseUrl={this.baseUrl} />} />
                    <Route path='/home/' render={(props) => <Home {...props} baseUrl={this.baseUrl} />} />
                </div>
            </Router>
        )
    }
}

export default Controller;


