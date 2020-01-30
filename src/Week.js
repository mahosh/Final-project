import Table from 'react-bootstrap/Table';
import React, { Component } from 'react';
import Day from './Day';



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
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                </tbody>
            </Table>
        )
    }

}

