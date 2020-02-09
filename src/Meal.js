import React, { Component } from 'react';
import './Meal.css';
import 'antd/dist/antd.css';
import './index.css';
import { TimePicker } from 'antd';
import moment from 'moment';
import MealTitle from './MealTitle';

export default class Meal extends Component {
    
    constructor(props) {
        super(props);
    }
    render() {
        const { typeOfMeal } = this.props;
        const format = 'HH:mm';
        function manageRows(e){
            if(e.keyCode == 13){}
            else {}
        } 
        return(
            <div className="mealWrap">
                <TimePicker defaultValue={moment('00:00', format)} format={format} />
                <div className="mealMenu">
                    <MealTitle typeOfMeal={typeOfMeal}></MealTitle>
                    <input type="text" className="txtSearch" onkeydown="manageRow(event.keyCode)" maxLength="9"/>

                </div>
            </div>
        )
    }
}
