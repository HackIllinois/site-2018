import React, { Component } from 'react';

import { Grid, Form, Button, Image} from 'semantic-ui-react';
import {getAuth, sendRsvp, getRSVPData} from './rsvpHelper'
import styles from './rsvp.scss'

export default class Prersvp extends Component {
  constructor(props) {
    super(props);
  };

  componentWillMount() {
    sessionStorage.setItem('callback', '/rsvp');
    getAuth().then(authData => {
      sessionStorage.setItem('decision', 1);
      this.props.history.push("/rsvp/congratulations");
    })
    .catch(error => {
      if (error === 'PENDING') {
        this.props.history.push("/rsvp/waitlist");
      } else {
        this.props.history.push("/error");
      }
    });
  };

  render() {
    return(
      <Grid centered textAlign='center' verticalAlign='middle'>
        <img className="leftSquiggly" src='../../assets/img/png/squiggly_left.png' />
        <img className="rightSquiggly" src='../../assets/img/png/squiggly_right.png' />
        <Grid.Row className='rsvpContainer'>
          <Grid.Column mobile={14} computer={8} textAlign='center' verticalAlign='middle'>
            <Grid.Row className='verticalPadding'>
              <Image style={{margin: 'auto'}} src='../../assets/img/png/hackillinois_logo.png' size='small' />
            </Grid.Row>
            <Grid.Row className='startPrompt verticalPadding'>
              Loading, please wait!
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
