import React, { Component } from 'react'
import { Grid, Button, Icon} from 'semantic-ui-react';
import styles from './registerButtons.scss'

export default class RegisterButtons extends Component {
  render() {
    // Variables setup
    const nextStep = this.props.nextStep;
    const previousStep = this.props.previousStep;

    // Previous and Next Button setup
    let previousButton  = previousStep ?
      <Button icon size='small' labelPosition='left' floated='left' onClick={previousStep}>
        PREVIOUS
        <Icon name='caret left' />
      </Button> : null;

    let nextButton      = nextStep ?
      <Button icon size='small' labelPosition='right' floated='right' onClick={nextStep}>
        NEXT
        <Icon name='caret right' />
      </Button> : null;

    return(
      <Grid.Row>
        <Grid.Column>
          {previousButton}
          {nextButton}
        </Grid.Column>
      </Grid.Row>

    )
  }
}
