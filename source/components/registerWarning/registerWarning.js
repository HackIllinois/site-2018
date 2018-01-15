import React, { Component } from 'react'
import { Grid} from 'semantic-ui-react';
import styles from './registerWarning.scss'

import RegisterButtons from '../registerButtons/registerButtons';

export default class RegisterWarning extends Component {
  render() {
    const previousStep  = this.props.previousStep;
    const nextStep  = this.props.nextStep;

    return(
      <Grid>
        WARNING
        <RegisterButtons previousStep={previousStep} nextStep={nextStep} />
      </Grid>
    )
  }
}
