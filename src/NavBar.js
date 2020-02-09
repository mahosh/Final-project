import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import './NavBar.css';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Nav variant="tabs" defaultActiveKey="/home">
                <div className="navItemWrapper">
                    <Nav.Item>
                        <Nav.Link >יומני אכילה</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link >Option 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        לעתיד לבוא
                    </Nav.Link>
                    </Nav.Item>
                </div>
            </Nav>
        )
    }

}

