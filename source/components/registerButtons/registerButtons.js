import React, { Component } from 'react'
import { Grid, Button, Icon} from 'semantic-ui-react';
import styles from './registerButtons.scss'

export default class RegisterButtons extends Component {
  render() {
    // Variables setup
    const previousTitle = this.props.previousTitle || 'PREVIOUS';
    const nextTitle = this.props.nextTitle || 'NEXT';
    const previousStep = this.props.previousStep;
    const nextStep = this.props.nextStep;

    // Previous and Next Button setup
    let previousButton  = previousStep ?
      <Button icon size='small' labelPosition='left' floated='left' onClick={previousStep}>
        {previousTitle}
        <Icon name='caret left' />
      </Button> : null;

    let nextButton      = nextStep ?
      <Button icon size='small' labelPosition='right' floated='right' onClick={nextStep}>
        {nextTitle}
        <Icon name='caret right' />
      </Button> : null;

    return(
      <Grid.Row className='buttonContainer'>
        <Grid.Column>
          {previousButton}
          {nextButton}
        </Grid.Column>
      </Grid.Row>
    )
  }
}
