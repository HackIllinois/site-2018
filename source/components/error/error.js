import React, { Component } from 'react'
import { Grid, Form, Button, Image} from 'semantic-ui-react';
import styles from './error.scss'

export default class Error extends Component {
  render() {
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
