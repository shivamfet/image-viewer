import React , {Component} from 'react';
import Header from '../../common/header/Header';
import './Login.css';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            username : "",
            password : ""
        }
    }

    loginClickHandler = () => {
        let username = "abc";
        let password = "abc";
    }

    render() {
        return (
            <div>
                <Header />
                <div className="card-container">
                     <Card style={{ width: "18rem", padding : "48px 48px 48px 48px"}}>
                         <CardContent>
                            <Typography variant="headline" component="h2">
                                LOGIN
                            </Typography>
                            <br/>
                             <FormControl required>
                                <InputLabel htmlFor="username">Username</InputLabel>
                                <Input id="username" type="text" username={this.state.username}/>
                            </FormControl>
                            <br/><br/>
                            <FormControl required>
                                <InputLabel htmlFor="loginPassword">Password</InputLabel>
                                <Input id="loginPassword" type="password" loginpassword={this.state.password}/>
                            </FormControl>
                            <br/><br/><br/>
                            <Button variant="contained" color="primary" id="login_button" onClick={this.loginClickHandler}>LOGIN</Button>
                         </CardContent>
                    </Card> 
                </div>
            </div>)
    }
}

export default Login