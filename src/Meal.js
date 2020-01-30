import React, { Component } from 'react';

export default class Meal extends Component {
    
    constructor(props) {
        super(props);
    }
    render() {
        const { typeOfMeal } = this.props;
        return(
            <div>
                <label for="hours">שעה: </label>
                <input id="hours" maxLength="2" type="text" pattern="([0-1][0-9])|([2][0-3])"></input>
                <span> : </span>
                <input id="minutes" maxLength="2" type="text" pattern="([0-5][0-9])"></input>
            </div>
        )
    }
}
