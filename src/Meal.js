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

        this.state = {
            numOfDishes: 1,
            dishValues: []
        }
        this.manageRows = this.manageRows.bind(this);
    }


    manageRows(e) {
        if (e.keyCode === 13) {
           this.setState({
               numOfDishes: this.state.numOfDishes + 1
           })
        } /*else if (e.keyCode === 8) {
            alert("backspace pressed");
        }*/
    }

    render() {
        const { numOfDishes } = this.state;
        const { typeOfMeal } = this.props;
        const format = 'HH:mm';

        let inputs = [];
        for (var i = 0; i < numOfDishes; i++) {
            let input;
            if (i === numOfDishes - 1) {
                //value={dishValues[i]}
                input = <input type="text" className="txtSearch"  onKeyDown={this.manageRows} autoFocus/>
            } else {
                input = <input type="text" className="txtSearch" onKeyDown={this.manageRows}/>
            }
            inputs.push(input);
        }
        

        return(
            <div className="mealWrap">
                <TimePicker defaultValue={moment('00:00', format)} format={format} />
                <div className="mealMenu">
                    <MealTitle typeOfMeal={typeOfMeal}></MealTitle>
                    {inputs}

                </div>
            </div>
        )
    }
}
