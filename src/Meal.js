import React, { Component } from 'react';
import './Meal.css';
import 'antd/dist/antd.css';
import './index.css';
import { TimePicker } from 'antd';
import moment from 'moment';
import Card from 'react-bootstrap/Card';

export default class Meal extends Component {
    
    constructor(props) {
        super(props);
    }
    render() {
        const { typeOfMeal } = this.props;
        const format = 'HH:mm';
        return(
            <div id="mealWrap">
                <TimePicker defaultValue={moment('00:00', format)} format={format} />
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title class={typeOfMeal}>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
