import React, { Component } from 'react';
import LoginPage from './LoginPage';

export default class LoginState extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showLoginModal: false
        }
        this.handleClose = this.handleClose.bind(this);
    }
    handleClose() {
        this.setState({
            showLoginModal: false
        })
    }
    render() {
        const {showLoginModal} = this.state;
        return(
            <LoginPage show={showLoginModal} handleClose={this.handleClose}/>
        )
    }
}