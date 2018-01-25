import React, { Component } from 'react'
import { Grid, Checkbox, Transition, Label } from 'semantic-ui-react';
import styles from './registerWarning.scss'

import RegisterNav from '../registerNav/registerNav';
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

  validateStep = (func) => {
    const { warning, visible }  = this.state;

    if(warning) {
      func(warning);
    }
    else {
      this.setState({ visible: !visible });
    }
  };


  render() {
    const step                  = this.props.step;
    const nextStep              = this.props.nextStep;
    const submitForm            = this.props.submitForm;
    const previousStep          = this.props.previousStep;
    const validateStep          = this.validateStep;
    const handleChange          = this.handleChange;
    const { warning, visible }  = this.state;

    return(
      <Grid stackable textAlign='center' verticalAlign='middle'>
        <img className="leftSquiggly" src='./assets/img/png/squiggly_left.png' />
        <img className="rightSquiggly" src='./assets/img/png/squiggly_right.png' />
        <Grid.Row columns={2}>
          <Grid.Column mobile={16} tablet={4} computer={3}>
            <RegisterNav step={step}/>
          </Grid.Column>
          <Grid.Column className='warningContainer' mobile={16} tablet={12} computer={13}>
            <Grid.Row className='warningMessage'>
              If you click submit, your application will be complete.  If you feel that you are not adequately represented by the contents of your application, there will be space on the next page for additions.
            </Grid.Row>
            <Grid.Row >
              <Transition animation='shake' duration='300' visible={visible}>
                <div className='warningCheckbox'>
                  <Checkbox checked={warning} onChange={handleChange}/>
                  <Label>
                    I agree to <a href="https://hackillinois.org/coc" target="_blank"> the Code of Conduct.</a>
                  </Label>
                </div>
              </Transition>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
        <RegisterButtons previousStep={() => previousStep(warning)} submitForm={() => validateStep(submitForm)} nextStep={() => validateStep(nextStep)} />
      </Grid>
    )
  }
}
