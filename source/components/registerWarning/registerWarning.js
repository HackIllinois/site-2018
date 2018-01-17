import React, { Component } from 'react'
import { Grid, Checkbox, Transition } from 'semantic-ui-react';
import styles from './registerWarning.scss'

import RegisterButtons from '../registerButtons/registerButtons';

export default class RegisterWarning extends Component {

  constructor(props) {
    super(props);

    this.state = {
      warning: false,
      visible: true
    };
  };

  componentWillMount() {
    this.setState({ warning: this.props.data });
  }

  handleChange = (e, {checked}) => {
    this.setState({warning: checked});
  };

  validateStep = () => {
    const nextStep              = this.props.nextStep;
    const { warning, visible }  = this.state;

    if(warning) {
      nextStep(warning);
    }
    else {
      this.setState({ visible: !visible });
    }
  };


  render() {
    const previousStep          = this.props.previousStep;
    const validateStep          = this.validateStep;
    const handleChange          = this.handleChange;
    const { warning, visible }  = this.state;

    return(
      <Grid centered textAlign='center' verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column mobile={14} computer={8} textAlign='center'>
            <div className='warningMessage'>
              If you click submit, your application will be complete.  If you feel that you are not adequately represented by the contents of your applications, there will be space on the next page for additions.
            </div>
            <div className='checkBox'>
              <Transition animation='shake' duration='300' visible={visible}>
                <Checkbox checked={warning} onChange={handleChange} label={
                  <label>
                    I agree to <a> the code of conduct </a>
                  </label>
                }/>
              </Transition>
            </div>
          </Grid.Column>
        </Grid.Row>
        <RegisterButtons previousStep={() => previousStep(warning)} nextStep={validateStep} />
      </Grid>
    )
  }
}
