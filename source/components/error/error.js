import React, { Component } from 'react'
import { Grid, Form, Button, Image} from 'semantic-ui-react';
import styles from './error.scss'

export default class Error extends Component {
  render() {
    console.log(this.props.match);
    return(
      <Grid centered textAlign='center' verticalAlign='middle'>
        <Grid.Row className='startContainer'>
          <Grid.Column mobile={14} computer={8} textAlign='center' verticalAlign='middle'>
            <Grid.Row className='verticalPadding'>
              <Image style={{margin: 'auto'}} src='./assets/img/png/hackillinois_logo.png' size='medium' />
            </Grid.Row>
            <Grid.Row className='startPrompt verticalPadding'>
              404 Not Found <br/><br/>
              Please contact us at contact@hackillinois.org
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
