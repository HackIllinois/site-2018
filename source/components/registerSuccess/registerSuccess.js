import React, { Component } from 'react'
import { Grid, Form, Button, Image} from 'semantic-ui-react';
import styles from './registerSuccess.scss'

export default class RegisterSuccess extends Component {
  render() {
    return(
      <Grid centered textAlign='center' verticalAlign='middle'>
        <img className="backgroundImage leftButton" src='./assets/img/png/squiggly_left.png' />
        <img className="backgroundImage rightButton" src='./assets/img/png/squiggly_right.png' />
        <Grid.Row className='successContainer'>
          <Grid.Column mobile={14} computer={8} textAlign='center' verticalAlign='middle'>
            <Grid.Row className='verticalPadding'>
              <Image style={{margin: 'auto'}} src='./assets/img/png/hackillinois_logo.png' size='small' />
            </Grid.Row>
            <Grid.Row className='successPrompt verticalPadding'>
              You have succesfully registed for Hackillinois. We’ll be in touch. For now, here’s more information on our event. If you have any questions, please email us at <a href='mailto:contact@hackillinois.org'>contact@hackillinois.org</a>
            </Grid.Row>
            <Grid.Row className='verticalPadding'>
              {/* <Button>Mentors</Button> */}
              {/* <Button>Projects</Button> */}
              <a href="/"><Button>Home</Button></a>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
