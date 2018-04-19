import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Grid, Row, Col } from 'react-bootstrap';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import Aux from '../../hoc/Auxiliary';

import ScheduleForm from './scheduleForm/ScheduleForm';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Schedule.scss';

function getModalStyle() {
  const top = 50;
  const left = 55;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.typography.pxToRem(20),
    backgroundColor: 'white'
  },
  calendar: {
    minHeight: theme.typography.pxToRem(1000)
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  }
});

class Schedule extends Component {
  state = {
    open: false,
    beAbleToAddEvent: false,
    curSlotInfo: {},
    eventInfo:  {
      name: '',
      org: '',
      contact: ''
    },
    eventsArray: []
  };

  calendarTimeSlotGetter = (date) => {
    const selectedDate = new Date(date);
    const todayDate = new Date();

    if(selectedDate.setHours(0, 0, 0, 0) < todayDate.setHours(0, 0, 0, 0)) {
      return {
        className: 'timeSlotBeforeToday'
      };
    } else if(selectedDate.setHours(0, 0, 0, 0) > todayDate.setHours(0, 0, 0, 0)) {
      return {
        className: 'timeSlotAfterToday'
      };
    } else {
      return {};
    }
  };

  calendarEventGetter = (event, start, end, isSelected) => {
    return {
      className: 'eventBlock'
    };
  }

  onSelectSlotOpenModal = (slotInfo) => {
    const selectedStartDate = new Date(slotInfo.start);
    const todayDate = new Date();

    if(selectedStartDate.setHours(0, 0, 0, 0) >= todayDate.setHours(0, 0, 0, 0)) {
      this.setState({ 
        open: true,
        beAbleToAddEvent: true,
        curSlotInfo: slotInfo
      });
    } else {
      this.setState({ 
        open: true,
        beAbleToAddEvent: false,
        curSlotInfo: slotInfo
      });
    }
  };

  onColseModal = () => {
    this.setState({
      open: false,
      eventInfo:  {
        name: '',
        org: '',
        contact: ''
      }
    });
  };

  onEventInfoChange = (event) => {
    this.setState({
      eventInfo: {
        ...this.state.eventInfo, 
        [event.target.name]: event.target.value
      }
    });
  }

  onSubmitSchedule = (event) => {
    const addedEvent = {
      ...this.state.eventInfo,
      start: this.state.curSlotInfo.start,
      end: this.state.curSlotInfo.end
    };

    this.setState({
      eventsArray: [...this.state.eventsArray, addedEvent]
    });

    this.onColseModal();
    event.preventDefault();
  }

  render() {
    BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

    const { classes } = this.props;

    return (
      <Aux>
        <Grid>
          <Row className="show-grid">
            <Col xs={12}>
              <div className={classes.root}>
                <BigCalendar 
                  className={classes.calendar}
                  selectable
                  events={this.state.eventsArray}
                  views={['week', 'day', 'month']}
                  defaultView="week"
                  scrollToTime={new Date(1970, 1, 1, 6)}
                  defaultDate={new Date()}
                  slotPropGetter={(date) => this.calendarTimeSlotGetter(date)}
                  eventPropGetter={(event, start, end, isSelected) => this.calendarEventGetter(event, start, end, isSelected)}
                  onSelectEvent={event => alert(event.title)}
                  onSelectSlot={slotInfo => this.onSelectSlotOpenModal(slotInfo)}
                />
              </div>
              <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={this.onColseModal}>
                <div style={getModalStyle()} className={classes.paper}>
                  <Typography variant="title" id="modal-title">
                    <ScheduleForm 
                      beAbleToAddEvent={this.state.beAbleToAddEvent}
                      curSlotInfo={this.state.curSlotInfo}
                      eventInfo={this.state.eventInfo}
                      onEventInfoChange={(event) => this.onEventInfoChange(event)}
                      onSubmitSchedule={this.onSubmitSchedule}/>
                  </Typography>
                </div>
              </Modal>
            </Col>
          </Row>
        </Grid>
      </Aux>
    );
  }
}

Schedule.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Schedule);
