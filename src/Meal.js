import React, { Component } from 'react';
import './Meal.css';
import 'antd/dist/antd.css';
import './index.css';
import { TimePicker } from 'antd';
import moment from 'moment';

export default class Meal extends Component {
    
    constructor(props) {
        super(props);
    }
    render() {
        const { typeOfMeal } = this.props;
        const format = 'HH:mm';
        return(
            <div>
                <TimePicker defaultValue={moment('00:00', format)} format={format} />
            </div>
        )
    }
}
