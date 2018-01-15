import React, { Component } from 'react'
import { Grid, Checkbox } from 'semantic-ui-react';
import styles from './registerWarning.scss'

import RegisterButtons from '../registerButtons/registerButtons';

export default class RegisterWarning extends Component {

  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };
  };

  handleChange = (e, {checked}) => {
    this.setState({checked: checked});
  };

  validateStep = () => {
    const checked   = this.state.checked;
    const nextStep  = this.props.nextStep;

    if(checked) {
      nextStep();
    }
  };


  render() {
    const previousStep  = this.props.previousStep;
    const validateStep  = this.validateStep;
    const handleChange  = this.handleChange;

    return(
      <Grid centered textAlign='center' verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column mobile={14} computer={8} textAlign='center'>
            <div className='warningMessage'>
              If you click submit, your application will be complete.  If you feel that you are not adequately represented by the contents of your applications, there will be space on the next page for additions.
            </div>
            <div className='checkBox'>
              <Checkbox onChange={handleChange} label={
                <label>
                  I agree to <a> the code of conduct </a>
                </label>
              }/>
            </div>
          </Grid.Column>
        </Grid.Row>
        <RegisterButtons previousStep={previousStep} nextStep={validateStep} />
      </Grid>
    )
  }
}
