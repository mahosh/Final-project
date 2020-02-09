import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">יומני אכילה</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                    לעתיד לבוא
                </Nav.Link>
                </Nav.Item>
            </Nav>
        )
    }

}

