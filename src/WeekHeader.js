import React, { Component } from 'react';
import WeekPick from './WeekPick';

export default class WeekHeader extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            showWeekPick: false
        }
        this.handleClose = this.handleClose.bind(this);
    }
    handleClose() {
        this.setState({
            showWeekPick: false
        })
    }
    handleClose() {
        this.setState({
            showWeekPick: false
        })
    }
    render() {
        
        const { showWeekPick } = this.state;
        return(
            <div>
                <h1 onClick={() => {this.setState({showWeekPick: true})}}>click here</h1>
                <WeekPick show={showWeekPick} handleClose={this.handleClose} /*addNewMeal={this.addNewMeal}*//>
            </div>
        )
    }
}