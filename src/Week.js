import Table from 'react-bootstrap/Table';
import React, { Component } from 'react';
import Day from './Day';
import './Week.css';
import WeekHeader from './WeekHeader';



export default class Week extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentDay: "",
            firstDayOfTheWeek: "",
        }
    }
    render() {
        return(
            <div>
                <h1>יומן אכילה</h1>
                <WeekHeader/>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>יום א</th>
                            <th>יום ב</th>
                            <th>יום ג</th>
                            <th>יום ד</th>
                            <th>יום ה</th>
                            <th>יום ו</th>
                            <th>יום ש</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Day/></td>
                            <td><Day/></td>
                            <td><Day/></td>
                            <td><Day/></td>
                            <td><Day/></td>
                            <td><Day/></td>
                            <td><Day/></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }

}

