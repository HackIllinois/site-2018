import React, { Component } from 'react';
// Components
import RegisterForm from '../registerForm/registerForm';
import RegisterTeam from '../registerTeam/registerTeam';
import RegisterWarning from '../registerWarning/registerWarning';
import RegisterEssay from '../registerEssay/registerEssay';
import RegisterSuccess from '../registerSuccess/registerSuccess';

import { Grid } from 'semantic-ui-react'
import { personal_fields, profressional_fields } from './registerFieldsConfig'

import styles from './register.scss'
import axios from 'axios';

// ES6 React Component:
export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      personal: {},
      profressional: {},
      ecosystemInterests: [],
      extras: [],
      collaborators: ['']
    };
  };

  componentWillMount() {
    let personal_data = {};
    personal_fields.map((config, index)=> {
      personal_data[config.id] = null;
    });

    let profressional_data = {};
    profressional_fields.map((config, index)=> {
      profressional_data[config.id] = null;
    });

    this.setState({ personal: personal_data, profressional: profressional_data});
  }


  nextStep = (prop, data) => {
    this.setState({ step: this.state.step + 1, [prop]: data });
  };

  previousStep = () => {
    this.setState({ step: this.state.step - 1 });
  };

  submitForm = () => {
    console.log('Submit');
    this.nextStep();
    // axios.post('https://api.hackillinois.org//v1/registration/attendee', {
    //   attendee: this.state.attendee,
    //   ecosystemInterests: this.state.ecosystemInterests,
    //   extras: this.state.extras,
    //   collaborators: this.state.collaborators,
    // })
    // .then(response => {
    //     console.log(response);
    // })
    // .catch(error => {
    //     console.log(error);
    // });
  };

  render() {
    // Variables setup
    const nextStep      = this.nextStep;
    const previousStep  = this.previousStep;
    const submitForm    = this.submitForm;
    const state         = this.state;

    return(
      <div className="registerContainer">
        {
          [
            <RegisterForm key='0' step={state.step} id='personal' data={state.personal} previousStep={null} nextStep={nextStep} forms={personal_fields}/>,
            <RegisterForm key='1' step={state.step} id='profressional' data={state.profressional} previousStep={previousStep} nextStep={nextStep} forms={profressional_fields}/>,
            <RegisterTeam step={state.step} id='collaborators' data={state.collaborators} previousStep={previousStep} nextStep={nextStep}/>,
            <RegisterWarning previousStep={previousStep} nextStep={nextStep}/>,
            <RegisterEssay previousStep={previousStep} nextStep={submitForm}/>,
            <RegisterSuccess status={state.status}/>,
          ][state.step]
        }
      </div>
    )
  }
}
