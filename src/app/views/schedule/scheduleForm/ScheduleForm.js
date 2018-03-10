import React from 'react';
import PropTypes  from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Panel from '../../../components/panel/Panel';

const styles = () => ({
  optCtn: {
    textAlign: 'center',
  }
});

const ScheduleForm = (props) => {
  const { classes } = props;

  const startTimeStr = props.curSlotInfo.start.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  const endTimeStr = props.curSlotInfo.end.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

  return (
    <Panel
      hasTitle={false}>
      {
        props.beAbleToAddEvent
          ? (
            <div>
              <p>Make an appointment From 
              <b> {startTimeStr} </b> 
              To 
              <b> {endTimeStr}</b>
              </p>
              <form 
                role="form"
                onSubmit={(event) => props.onSubmitSchedule(event)}>
        
                <div className="form-group">
                  <label>
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                    name="name"
                    value={props.eventInfo.name}
                    onChange={(event) => props.onEventInfoChange(event)}
                  />
                </div>
        
                <div className="form-group">
                  <label>
                    Company/Org
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Company/Orgnization"
                    name="org"
                    value={props.eventInfo.org}
                    onChange={(event) => props.onEventInfoChange(event)}
                  />
                </div>
        
                <div className="form-group">
                  <label>
                    Contact
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your email or number"
                    name="contact"
                    value={props.eventInfo.contact}
                    onChange={(event) => props.onEventInfoChange(event)}
                  />
                </div>
        
                <div className={classes.optCtn}>
                  <button
                    type="submit"
                    className="btn btn-info">
                    Schedule
                  </button>
                </div>
              </form>
            </div>
          )
          : (
            <h4 style={{textAlign: 'center', color: '#e74c3c'}}>Unable to schedule before today</h4>
          )
      }
    </Panel>
  );
};

ScheduleForm.propTypes = {
  classes: PropTypes.object.isRequired,
  beAbleToAddEvent: PropTypes.bool,
  curSlotInfo: PropTypes.object,
  eventInfo: PropTypes.object,
  onEventInfoChange: PropTypes.func,
  onSubmitSchedule: PropTypes.func
};

export default withStyles(styles)(ScheduleForm);
