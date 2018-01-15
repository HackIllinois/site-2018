import React, { Component } from 'react'
import { Grid} from 'semantic-ui-react';
import styles from './registerEssay.scss'

import RegisterButtons from '../registerButtons/registerButtons';

export default class RegisterEssay extends Component {
  render() {
    const previousStep  = this.props.previousStep;
    const nextStep  = this.props.nextStep;

    return(
      <Grid>
        ESSAY
        <RegisterButtons previousStep={previousStep} nextStep={nextStep} />
      </Grid>
    )
  }
}
