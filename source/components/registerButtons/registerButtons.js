import React, { Component } from 'react'
import { Grid, Button, Icon} from 'semantic-ui-react';
import styles from './registerButtons.scss'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCaretLeft from '@fortawesome/fontawesome-free-solid/faCaretLeft'
import faCaretRight from '@fortawesome/fontawesome-free-solid/faCaretRight'

export default class RegisterButtons extends Component {
  render() {
    // Variables setup
    const submitForm = this.props.submitForm;
    const previousStep = this.props.previousStep;
    const nextStep = this.props.nextStep;

    // Previous and Next Button setup
    let previousButton  = previousStep ?
      <Button icon size='small' labelPosition='left' floated='left' onClick={previousStep}>
        <FontAwesomeIcon icon={faCaretLeft} size="2x"/>
        <span className="labelText">PREVIOUS</span>
      </Button> : null;

    let nextButton      = nextStep ?
      <Button icon size='small' labelPosition='right' floated='right' onClick={nextStep}>
        <span className="labelText opposite">NEXT</span>
        <FontAwesomeIcon icon={faCaretRight} size="2x"/>
      </Button> : null;

    let submitButton    = submitForm ?
      <Button icon size='small' labelPosition='right' floated='right' onClick={submitForm}>
        <span className="labelText opposite">SUBMIT</span>
        <FontAwesomeIcon icon={faCaretRight} size="2x"/>
      </Button> : null;

    return(
      <Grid.Row className='buttonContainer'>
        <Grid.Column>
          {previousButton}
          {nextButton}
          {submitButton}
        </Grid.Column>
      </Grid.Row>
    )
  }
}
