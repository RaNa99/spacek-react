import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ClassIcon from 'material-ui-icons/Class';
import BuildIcon from 'material-ui-icons/Build';
import WorkIcon from 'material-ui-icons/Work';
import CodeIcon from 'material-ui-icons/Code';
import SchoolIcon from 'material-ui-icons/School';

import './ProfileStepper.scss';

import * as ProfileArray from '../ProfileArray';

const styles = theme => ({
  root: {
    position: 'fixed',
    top: '50%',
    right: '-160px',
    transform: 'translateY(-50%)',
    zIndex: 1,
    fontSize: theme.typography.pxToRem(24)
  },
  list: {
    backgroundColor: theme.palette.background.default
  }
});

const ProfileStepper = function (props) {
  const { classes } = props;
  let steppers = [];

  steppers = ProfileArray.ProfileArray.map((section, index) => {
    return (
      <ListItem button 
        key={index} 
        onClick={() => props.onClickProfileStepper(section.header)}>
        <ListItemIcon>
          {
            (() => {
              switch(section.header) {
              case 'SUMMARY':
                return <ClassIcon />;
              case 'SKILLS':
                return <BuildIcon />;
              case 'WORKING EXPERIENCE':
                return <WorkIcon />;
              case 'PROJECTS':
                return <CodeIcon />;
              case 'EDUCATION':
                return <SchoolIcon />;
              default:
                return null;
              }
            })()
          }
        </ListItemIcon>
        <ListItemText primary={section.header} />
      </ListItem>
    );
  });

  return (
    <div className={classes.root}>
      <List component="nav" className={classes.list + ' profileStepperCtn'}>
        {steppers}
      </List>
    </div>
  );
};

ProfileStepper.propTypes = {
  classes: PropTypes.object.isRequired
};
  

export default withStyles(styles)(ProfileStepper);
