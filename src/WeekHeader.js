import React, { Component } from 'react';
import WeekPick from './WeekPick';
import moment from 'moment';

export default class WeekHeader extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            showWeekPick: false,
            days: ["Sun Feb 09 2020 00:00:00 GMT-0500",
                   "Mon Feb 10 2020 00:00:00 GMT-0500",
                   "Tue Feb 11 2020 00:00:00 GMT-0500",
                   "Wed Feb 12 2020 00:00:00 GMT-0500",
                   "Thu Feb 13 2020 00:00:00 GMT-0500",
                   "Fri Feb 14 2020 00:00:00 GMT-0500",
                   "Sat Feb 15 2020 00:00:00 GMT-0500"
                ]
        }
        this.handleClose = this.handleClose.bind(this);
        this.showWeek = this.showWeek.bind(this);
    }
    handleClose() {
        this.setState({
            showWeekPick: false
        })
    }
    showWeek(chosenDays){
        this.setState({
            days: chosenDays
        })
    }
    
    render() {
        const { days } = this.state;
        const { showWeekPick } = this.state;
        return(
            <div>
                <p onClick={() => {this.setState({showWeekPick: true})}}>
                        {moment(days[0]).format('L')} –{' '}
                        {moment(days[6]).format('L')}
                </p>
                <WeekPick show={showWeekPick} handleClose={this.handleClose} showWeek={this.showWeek}/>
            </div>
        )
    }
}
