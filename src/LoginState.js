import React, { Component } from 'react';
import LoginPage from './LoginPage';
import jsonUsers from "./users"; 

export default class LoginState extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showLoginModal: true,
            allUsers: jsonUsers
        }
        this.handleClose = this.handleClose.bind(this);
    }
    handleClose() {
        this.setState({
            showLoginModal: false
        })
    }
    render() {
        const {showLoginModal, allUsers} = this.state;
        return(
            <LoginPage show={showLoginModal} handleClose={this.handleClose} allUsers={allUsers}/>
        )
    }
}