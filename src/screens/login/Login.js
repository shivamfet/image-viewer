import React, { Component } from 'react';
import Header from '../../common/header/Header';
import './Login.css';
import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            usernameRequired: "dispNone",
            passwordRequired: "dispNone",
            isLoginSuccessful: "",
            areCredentialsCorrect : ""
        }
    }

    inputUsernameHandler = (e) => {
        this.setState({areCredentialsCorrect : ""})
        this.setState({ usernameRequired: "dispNone" })
        this.setState({username : e.target.value});
        console.log(this.state.username);
    }

    inputPasswordHandler = (e) => {
        this.setState({areCredentialsCorrect : ""})
        this.setState({ passwordRequired: "dispNone" })
        this.setState({password : e.target.value})
        console.log(this.state.password);
    }

    loginClickHandler = () => {
        let username = "abc";
        let password = "abc";
        
        this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });
        this.state.password === "" ? this.setState({ passwordRequired: "dispBlock" }) : this.setState({ passwordRequired: "dispNone" });

        if (this.state.username === username && this.state.password === password) {
            console.log("Login is successful")
            this.setState({ isLoginSuccessful: "true" });
        } else {
            this.setState({areCredentialsCorrect : "false"});
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div className="card-container">
                    <Card style={{ width: "22rem", padding: "48px 48px 48px 48px" }}>
                        <CardContent>
                            <Typography variant="headline" component="h2">
                                LOGIN
                            </Typography>
                            <br />
                            <FormControl required>
                                <InputLabel htmlFor="username">Username</InputLabel>
                                <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameHandler}/>
                                <FormHelperText className={this.state.usernameRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="loginPassword">Password</InputLabel>
                                <Input id="loginPassword" type="password" loginPassword={this.state.password} onChange = {this.inputPasswordHandler}/>
                                <FormHelperText className={this.state.passwordRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br /><br />
                            <Button variant="contained" color="primary" id="login_button" onClick={this.loginClickHandler}>LOGIN</Button>
                            <br /><br />
                            {this.state.usernameRequired === "dispNone" && this.state.passwordRequired === "dispNone" && this.state.areCredentialsCorrect === "false" &&
                                <FormControl>
                                    <span className="red">Incorrect username and/or password</span>
                                </FormControl>
                            }
                        </CardContent>
                    </Card>
                </div>
            </div>)
    }
}

export default Login