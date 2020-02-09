import React, { Component } from 'react';
import Meal from './Meal';
import PickingMeal from './PickingMeal';
import Button from 'react-bootstrap/Button';


export default class Day extends Component {

    constructor(props) {
        super(props);

        this.state = {
            meals: [],
            showPickingMeal: false
        }
        this.handleClose = this.handleClose.bind(this);
        this.addNewMeal = this.addNewMeal.bind(this);

    }
    handleClose() {
        this.setState({
            showPickingMeal: false
        })
    }
    addNewMeal(typeOfMeal){
        this.setState({
            meals: this.state.meals.concat(typeOfMeal)
        })
    }
    render() {
        const mealsToShow = this.state.meals.map(currentMeal =>
            <Meal typeOfMeal={currentMeal} />)
        const {showPickingMeal} = this.state;
        return(
            <div>
                <Button onClick={() => {this.setState({showPickingMeal: true})}}>הוסף ארוחה</Button>
                <div>
                    {mealsToShow}
                </div>
                <PickingMeal show={showPickingMeal} meals={this.state.meals} handleClose={this.handleClose} addNewMeal={this.addNewMeal}/>
            </div>
        )
    }

}