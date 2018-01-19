import React, { Component } from 'react';
// Components
import RegisterNav from '../registerNav/registerNav';
import InputField from '../inputField/inputField';
import RegisterButtons from '../registerButtons/registerButtons';
import { Grid, Form, Transition } from 'semantic-ui-react';

import styles from './registerForm.scss'

export default class RegisterForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {},
      visible: true
    };
  };

  componentWillMount() {
    this.setState({ data: this.props.data });
  };

  handleChange = (e, { name, value }) => {
    this.setState({ data: {...this.state.data, [name]: value }});
  };

  checkProperties = () => {
    const forms = this.props.forms;
    const data  = this.state.data;

    for (let index in forms) {
      const config = forms[index];
      if ((data[config.id] === null || data[config.id] == "") && config.required) {
        return false;
      }
    }
    return true;
  };

  validateStep = () => {
    const { data, visible } = this.state;
    const nextStep          = this.props.nextStep;

    if(this.checkProperties()) {
      nextStep(data);
    }
    else {
      this.setState({ visible: !visible });
    }
  };

  render() {
    // Variables setup
    const {data, visible} = this.state;
    const step            = this.props.step;
    const forms           = this.props.forms;
    const previousStep    = this.props.previousStep ? () => this.props.previousStep(data) : null;
    const validateStep    = this.validateStep;
    const handleChange    = this.handleChange;

    return(
      <Grid stackable>
        <Grid.Row columns={2}>
          <Grid.Column mobile={16} tablet={4} computer={3}>
            <RegisterNav step={step}/>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={12} computer={13}>
            <Transition animation='shake' duration='300' visible={visible}>
              <Form size='small'>
                <Grid className='formContainer' doubling columns={2}>
                  {forms.map((config, index) =>
                    <Grid.Column width={config.width} key={index}>
                      <InputField value={data[config.id]} config={config} handleChange={handleChange}/>
                    </Grid.Column>
                  )}
                </Grid>
              </Form>
            </Transition>
          </Grid.Column>
        </Grid.Row>
        <RegisterButtons previousStep={previousStep} nextStep={validateStep} />
      </Grid>
    )
  }
}
