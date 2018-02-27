import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
// import Chip from 'material-ui/Chip';
import List, {
  ListItem,
  ListItemText
} from 'material-ui/List';
import Divider from 'material-ui/Divider';

import './ProfileSection.scss';

const styles = theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(32),
    fontWeight: theme.typography.fontWeightRegular
  },
  columnLeft: {
    flexBasis: '35%'
  },
  columnRight: {
    flexBasis: '65%'
  },
  helper: {
    borderLeft: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  chip: {
    margin: theme.spacing.unit
  }
});

const ProfileSection = function (props) {
  const { classes } = props;

  let profileSectionDetail = [];
  props.section.subSections.map(subSection => {
    if(subSection.subHeader === '') {
      profileSectionDetail.push((
        <div key={subSection.subHeader}>
          <Divider />
          <ExpansionPanelDetails>
            <Typography variant="caption">
              <List>
                {subSection.items.map((item, index) => {
                  return (
                    <ListItem button key={index}>
                      <ListItemText
                        className="listItemText"
                        primary={item} />
                    </ListItem>
                  );
                })}
              </List>
            </Typography>
          </ExpansionPanelDetails>
        </div>
      ));
    } else {
      profileSectionDetail.push((
        <div key={subSection.subHeader}>
          <Divider />
          <ExpansionPanelDetails>
            <div className={classes.columnLeft}>
              <h4><b>{subSection.subHeader}</b></h4>
              <h5><b>{subSection.title}</b></h5>
              <h5>{subSection.location}</h5>
              <h5>{subSection.time}</h5>
            </div>
            <div className={classNames(classes.columnRight, classes.helper)}>
              <List>
                {subSection.items.map((item, index) => {
                  return (
                    <ListItem button key={index}>
                      <ListItemText 
                        className="listItemText"
                        primary={item} />
                    </ListItem>);
                })}
              </List>
            </div>
          </ExpansionPanelDetails>
        </div>
      ));
    }
  });

  return (
    <ExpansionPanel defaultExpanded>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>{props.section.header}</Typography>
      </ExpansionPanelSummary>
      {profileSectionDetail}
    </ExpansionPanel>
  );
}


ProfileSection.propTypes = {
  classes: PropTypes.object.isRequired,
  section: PropTypes.object.isRequired
};
  

export default withStyles(styles)(ProfileSection);