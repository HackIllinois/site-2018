import React, { Component } from 'react';

import { Grid, Form, Button, Image} from 'semantic-ui-react';
import {getAuth, sendRsvp, getRSVPData} from './rsvpHelper'
import styles from './rsvp.scss'

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-46010489-2', {
      'cookieDomain': 'hackillinois.org'
  });


export default class RsvpYes extends Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    getAuth();
  };

  render() {
    return(
      <Grid centered textAlign='center' verticalAlign='middle'>
        <img className="leftSquiggly" src='./assets/img/png/squiggly_left.png' />
        <img className="rightSquiggly" src='./assets/img/png/squiggly_right.png' />
        <Grid.Row className='startContainer'>
          <Grid.Column mobile={14} computer={8} textAlign='center' verticalAlign='middle'>
            <Grid.Row className='verticalPadding'>
              <Image style={{margin: 'auto'}} src='./assets/img/png/hackillinois_logo.png' size='small' />
            </Grid.Row>
            <Grid.Row className='startPrompt verticalPadding'>
              Congratulations on being accepted to HackIllinois 2018. We&#39;re excited to have you here! Please let us know if you can attend.
            </Grid.Row>
            <Grid.Row className='verticalPadding'>
              <a href="/rsvp/yes">
                <Button size='medium'>Yes</Button>
              </a>
              <a href="/rsvp/yes">
                <Button size='medium'>No</Button>
              </a>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
