import React from 'react';
import moment from 'moment';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './WeekPick.css';
import Modal from 'react-bootstrap/Modal';

function getWeekDays(weekStart) {
  const days = [weekStart];
  for (let i = 1; i < 7; i += 1) {
    days.push(
      moment(weekStart)
        .add(i, 'days')
        .toDate()
    );
  }
  return days;
}

function getWeekRange(date) {
  return {
    from: moment(date)
      .startOf('week')
      .toDate(),
    to: moment(date)
      .endOf('week')
      .toDate(),
  };
}

export default class WeekPick extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hoverRange: undefined,
            selectedDays: [],
        };
    }

  handleDayChange = date => {
    this.setState({
      selectedDays: getWeekDays(getWeekRange(date).from),
    });
  };

  handleDayEnter = date => {
    this.setState({
      hoverRange: getWeekRange(date),
    });
  };

  handleDayLeave = () => {
    this.setState({
      hoverRange: undefined,
    });
  };

  handleWeekClick = (weekNumber, days, e) => {
    this.setState({
      selectedDays: days,
    });
  };

  render() {
    const { show, handleClose } = this.props;
    const { hoverRange, selectedDays } = this.state;

    const daysAreSelected = selectedDays.length > 0;

    const modifiers = {
      hoverRange,
      selectedRange: daysAreSelected && {
        from: selectedDays[0],
        to: selectedDays[6],
      },
      hoverRangeStart: hoverRange && hoverRange.from,
      hoverRangeEnd: hoverRange && hoverRange.to,
      selectedRangeStart: daysAreSelected && selectedDays[0],
      selectedRangeEnd: daysAreSelected && selectedDays[6],
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>בחר שבוע</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="SelectedWeekExample">
                    <DayPicker
                        selectedDays={selectedDays}
                        showWeekNumbers
                        showOutsideDays
                        modifiers={modifiers}
                        onDayClick={this.handleDayChange}
                        onDayMouseEnter={this.handleDayEnter}
                        onDayMouseLeave={this.handleDayLeave}
                        onWeekClick={this.handleWeekClick}
                    />
                    {selectedDays.length === 7 && (
                    <div>
                        {moment(selectedDays[0]).format('LL')} –{' '}
                        {moment(selectedDays[6]).format('LL')}
                    </div>
                    )}
                </div>
            </Modal.Body>
        </Modal>
    );
  }
}