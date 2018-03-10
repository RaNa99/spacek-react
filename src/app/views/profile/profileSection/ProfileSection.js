import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Row, Col } from 'react-bootstrap';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Chip from 'material-ui/Chip';
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
    margin: theme.spacing.unit,
    fontSize: theme.typography.pxToRem(16)
  }
});

class ProfileSection extends Component {
  render() {
    const { classes } = this.props;

    let profileSectionDetail = [];
    const skillsSetArray = ['MEAN', 'MongoDB', 'MongoDB Atlas', 'Angular4', 'RESTful API', 
      'Node', 'Express', 'Mongoose', 'Docker', 'micro-services', 'AngularJS', 'Bootstrap', 
      'Python', 'Django', 'WordPress', 'Backbone', 'Gulp', 'Sass', 'LESS', 'CSS', 'Adobe Flex', 
      'Java', 'Testing', 'React', 'Redux', 'Flask', 'mySQL', 'PHP', 'ajax', 'SQL Injection Defense', 
      'RBAC', 'Encryption', 'jQuery', 'NetSuit'];
  
    this.props.section.subSections.map(subSection => {
      if(subSection.subHeader === '') {
        profileSectionDetail.push((
          <div key={subSection.subHeader}>
            <Divider />
            <ExpansionPanelDetails>
              <Typography variant="caption">
                <List>
                  {subSection.items.map((item, index) => {
                    return (
                      <ListItem key={index}>
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
                {
                  subSection.hasOwnProperty('subHeaderImg') 
                    ? <Row className="show-grid subHeaderCtn">
                      <Col xs={4}>
                        <img src={subSection.subHeaderImg} />
                      </Col>
                      <Col xs={8}>
                        < h4><b>{subSection.subHeader}</b></h4>
                      </Col>
                    </Row>
                    : < h4><b>{subSection.subHeader}</b></h4>
                }
                <h5><b>{subSection.title}</b></h5>
                <h5>{subSection.location}</h5>
                <h5>{subSection.time}</h5>
                {
                  (!subSection.subHeader .includes('University')) 
                    ? subSection.items.map(item => {
                      return skillsSetArray.map((skill, index) => {
                        if (item.includes(skill)) {
                          return (
                            <Chip label={skill} key={index} className={classes.chip} />
                          );
                        } else {
                          return null;
                        }
                      });
                    })
                    : null
                }
              </div>
              <div className={classNames(classes.columnRight, classes.helper)}>
                <List>
                  {subSection.items.map((item, index) => {
                    if(item.includes('https://')) {
                      return (
                        <ListItem button key={index}>
                          <a href={'https' + item.split('https')[1]} target="_blank">{item}</a>
                        </ListItem>);
                    } else {
                      return (
                        <ListItem key={index}>
                          <ListItemText 
                            className="listItemText"
                            primary={item} />
                        </ListItem>);
                    }
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
          <Typography className={classes.heading}>{this.props.section.header}</Typography>
        </ExpansionPanelSummary>
        {profileSectionDetail}
      </ExpansionPanel>
    );
  }

}

ProfileSection.propTypes = {
  classes: PropTypes.object.isRequired,
  section: PropTypes.object.isRequired
};
  

export default withStyles(styles)(ProfileSection);
