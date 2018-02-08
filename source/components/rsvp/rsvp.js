import React, { Component } from 'react';

import { Grid, Form, Button, Image} from 'semantic-ui-react';
import {getAuth, sendRsvp, getRSVPData} from './rsvpHelper'
import styles from './rsvp.scss'

export default class Rsvp extends Component {
  constructor(props) {
    super(props);
  };

  componentWillMount() {
    sessionStorage.setItem('callback', '/rsvp');
    getAuth().then(authData => {
      //console.log("Token Exists");
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
              Congratulations on being accepted to HackIllinois 2018, we&#39;re excited to have you here on February 23rd to 25th! To get started, please let us know if you can attend!
            </Grid.Row>
            <Grid.Row className='verticalPadding'>
              <a href="/rsvp/yes">
                <Button size='medium'>Yes</Button>
              </a>
              <a href="/rsvp/no">
                <Button size='medium'>No</Button>
              </a>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
