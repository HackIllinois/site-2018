import React, { Component } from 'react'
import { Grid, Form, Button, Image} from 'semantic-ui-react';
import styles from './error.scss'

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-46010489-2', {
      'cookieDomain': 'hackillinois.org'
  });

export default class Error extends Component {
  render() {
    if (ga) {
      ga('send', 'exception', {
        'exDescription': '/404: ' + this.state.attendeeEmail,
        'exFatal': true
      })
    }
    console.log(this.props.match);
    return(
      <Grid centered textAlign='center' verticalAlign='middle'>
        <Grid.Row className='errorContainer'>
          <Grid.Column mobile={14} computer={8} textAlign='center' verticalAlign='small'>
            <Grid.Row className='verticalPadding'>
              <Image style={{margin: 'auto'}} src='./assets/img/png/hackillinois_logo.png' size='medium' />
            </Grid.Row>
            <Grid.Row className='errorPrompt verticalPadding'>
              404 Not Found <br/><br/>
              Please contact us at <a href="mailto:contact@hackillinois.org">contact@hackillinois.org</a>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
