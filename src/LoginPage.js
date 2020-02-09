import React, { Component } from 'react';
import './LoginPage.css'
import { Form, Button, Alert, Modal } from 'react-bootstrap';
/*import { Link } from 'react-router-dom';*/

export default class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "maor@example.com",
            pwd: "1234"
        }
        
        this.login = this.login.bind(this);
    }
    login() {
       // const { allUsers, handleLogin } = this.props;
        const { email, pwd } = this.state;
        const {handleClose, allUsers} = this.props;
        const newActiveUser = allUsers.find(user => user.email.toLowerCase() === email.toLowerCase() && user.pwd === pwd);

        if (newActiveUser) {
            // 1) Updating App component on the new active user
          //  handleLogin(newActiveUser);
            handleClose()
        } else {
            this.setState({
                showInvalidLoginError: true
            });
        }

    }

    render() {
        const { email, pwd, showInvalidLoginError } = this.state;
        const { show, handleClose } = this.props;
        const errorAlert = showInvalidLoginError ? <Alert variant="danger">Invalid email or password!</Alert> : null;

        return (
            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header>
                    <Modal.Title>התחברו</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="p-login">
                        <div className="main">
                          { /* <p>or <Link to="/signup">create a new account</Link></p>*/}
                            {errorAlert}
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control name="email" defaultValue={email}
                                        type="email" placeholder="Enter email" onChange={this.handleInputChange} />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name="pwd" defaultValue={pwd}
                                        type="password" placeholder="Password" onChange={this.handleInputChange} />
                                </Form.Group>
                                <Button variant="success" type="button" block onClick={this.login}>
                                    Login
                                </Button>
                            </Form>
                        </div>
                    </div>
                </Modal.Body>
            </Modal> 
        );
    }
    
}