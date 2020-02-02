import React, { Component } from 'react';
import Meal from './Meal';


export default class Day extends Component {

    constructor(props) {
        super(props);

        this.state = {
            meals: []
        }

    }
    render() {
        return(
            <div>
                <button className="addMeal" onClick="" type="button">הוסף ארוחה</button>
                <Meal typeOfMeal="lunch"></Meal>
            </div>
        )
    }

}