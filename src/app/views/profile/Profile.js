import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Grid, Row, Col } from 'react-bootstrap';
import { withStyles } from 'material-ui/styles';

import Aux from '../../hoc/Aux';
import ProfileSection from './profileSection/ProfileSection';
import ProfileStepper from './profileStepper/ProfileStepper';

import './Profile.scss';

import * as ProfileArray from './ProfileArray';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  heading: {
    fontSize: theme.typography.pxToRem(32),
    fontWeight: theme.typography.fontWeightRegular
  },
  detail: {
    fontSize: theme.typography.pxToRem(24),
    fontWeight: theme.typography.fontWeightRegular
  }
});

class Profile extends Component {
  profileArray = [...ProfileArray.ProfileArray];
  profileSections = [];

  onClickProfileStepper(sectionName) {
    this.profileSections[sectionName].scrollIntoView();
    window.scrollBy(0, -60);
  }

  render() {
    const { classes } = this.props;
    let profile = [];

    profile = this.profileArray.map((section, index) => {
      return (
        <div key={index}
          ref={el => {
            this.profileSections[section.header] = el;
          }}>
          <ProfileSection 
            section={section} />
        </div>
      );
    });

    return (
      <Aux>
        <Grid>
          <Row className="show-grid">
            <Col xs={12}>
              <div className={classes.root}>
                {profile}
              </div>
            </Col>
          </Row>
        </Grid>
        <ProfileStepper onClickProfileStepper={(sectionName) => this.onClickProfileStepper(sectionName)}/>
      </Aux>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Profile);
