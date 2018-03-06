import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Grid, Row, Col } from 'react-bootstrap';
import { withStyles } from 'material-ui/styles';

import './Profile.scss';

import ProfileSection from './profileSection/ProfileSection';

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

  render() {
    const { classes } = this.props;
    let profile = [];

    this.profileArray.map(section => {
      profile.push((
        <ProfileSection section={section} key={section.header}/>
      ));
    });

    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12}>
            <div className={classes.root}>
              {profile}
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Profile);
