import React, { Component } from 'react';
import './MealTitle.css';

export default class MealTitle extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { typeOfMeal } = this.props;
        function getMealText(meal) {
            let text = "";
            switch(meal) {
                case "morning":
                    text = "ארוחת בוקר";
                break;
                case "branch":
                    text = "בראנץ'";
                break;
                case "lunch":
                    text = "ארוחת צהריים";
                break;
                case "four":
                    text = "ארוחת ארבע";
                break;
                case "evening":
                    text = "ארוחת ערב";
                break;
                
            }
            return(text);
        }
        return(
            <div>
                <h5 className={typeOfMeal}>{getMealText(typeOfMeal)}</h5>
            </div>
        )
    }
}