import React, { Component } from 'react';

import { Grid, Form, Button, Image} from 'semantic-ui-react';
import {getAuth, sendRsvp, getRSVPData} from './rsvpHelper'
import styles from './rsvp.scss'

export default class RsvpYes extends Component {
  constructor(props) {
    super(props);
  };

  componentWillMount() {
    sessionStorage.setItem('callback', '/rsvp/yes');
    getAuth().then(authData => {
      getRSVPData().then(rsvpData => {
        sendRsvp(true, 'put').then(response => {
          console.log("RSVP Put Success");
        })
        .catch(error => {
          console.log(error);
          this.props.history.push("/error");
        });
      })
      .catch(error => {
        sendRsvp(true, 'post').then(response => {
          console.log("RSVP Post Success");
        })
        .catch(error => {
          console.log(error);
          this.props.history.push("/error");
        });
      });
    })
    .catch(error => {
      console.log(error);
      console.log(error === 'PENDING');
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
              Thank you for RSVPing. We look forward to seeing you at the event! Be on the lookout for more information about busses and projects soon!
            </Grid.Row>
            <Grid.Row className='verticalPadding'>
              <a href="/">
                <Button size='medium'>Home</Button>
              </a>
              <a href="https://opensource.com/article/17/10/openstack-project-contribution-benefits" target="_blank">
                <Button size='medium'>Why Open Source?</Button>
              </a>
              <a href="https://opensource.guide/how-to-contribute/" target="_blank">
                <Button size='medium'>How to Contribute to OS</Button>
              </a>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
