import React, { Component } from 'react';
// Components
import RegisterForm from '../registerForm/registerForm';
import RegisterTeam from '../registerTeam/registerTeam';
import RegisterWarning from '../registerWarning/registerWarning';
import RegisterEssay from '../registerEssay/registerEssay';
import RegisterSuccess from '../registerSuccess/registerSuccess';

import { Grid } from 'semantic-ui-react'
import { personal_fields, professional_fields } from './registerFieldsConfig'

import styles from './register.scss'
import axios from 'axios';

// ES6 React Component:
export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      personal: {},
      professional: {},
      collaborators: [''],
      warning: false,
      essay: '',
      submissionStatus: 'loading',
    };
  };

  componentWillMount() {
    const token = sessionStorage.getItem("Authorization");
    if (token == null) {
      this.props.history.push("/start");
    }
    console.log(token);
    axios.get("http://api.test.hackillinois.org/v1/user/", { 'headers': { 'Authorization': token } })
    .then(response => {
      console.log("success");
      console.log(response);
    })
    .catch(error => {
      console.log("error");
      console.log(error);
    });

    let personal_data = {};
    personal_fields.map((config, index)=> {
      personal_data[config.id] = null;
    });

    let professional_data = {};
    professional_fields.map((config, index)=> {
      professional_data[config.id] = null;
    });

    this.setState({ personal: personal_data, professional: professional_data});
  };


  nextStep = (submit, prop) => data => {
    // Variables steup
    const { personal, professional, collaborators, essay, step } = this.state;
    // Update data
    this.setState({ [prop]: data });

    // Check if we need to make api call to make submission
    if (submit) {
      this.setState({ submissionStatus: 'loading' });
      const attendee = personal + professional;

      this.setState({ step: step + 1});

      // axios.post('https://api.hackillinois.org//v1/registration/attendee', {
      //   attendee: attendee,
      //   ecosystemInterests: [],
      //   extras: [essay],
      //   collaborators: collaborators,
      // })
      // .then(response => {
      //   this.setState({ submissionStatus: 'success', step: step + 1});
      // })
      // .catch(error => {
      //   this.setState({ submissionStatus: 'fail'});
      // });
    }
    else {
      this.setState({ step: step + 1});
    }
  };

  previousStep = prop => data => {
    this.setState({ step: this.state.step - 1, [prop]: data });
  };

  render() {
    // Variables setup
    const nextStep      = this.nextStep;
    const previousStep  = this.previousStep;
    const state         = this.state;

    return(
      <div className="registerContainer">
        {
          [
            <RegisterForm
              key={state.step}
              step={state.step}
              data={state.personal}
              previousStep={null}
              nextStep={nextStep(false, 'personal')}
              forms={personal_fields}
            />,
            <RegisterForm
              key={state.step}
              step={state.step}
              data={state.professional}
              previousStep={previousStep('professional')}
              nextStep={nextStep(false, 'professional')}
              forms={professional_fields}
            />,
            <RegisterTeam
              step={state.step}
              data={state.collaborators}
              previousStep={previousStep('collaborators')}
              nextStep={nextStep(false, 'collaborators')}
            />,
            <RegisterWarning
              step={state.step}
              data={state.warning}
              previousStep={previousStep('warning')}
              nextStep={nextStep(false, 'warning')}
            />,
            <RegisterEssay
              step={state.step}
              data={state.essay}
              previousStep={previousStep('essay')}
              nextStep={nextStep(true, 'essay')}
            />,
            <RegisterSuccess />,
          ][state.step]
        }
      </div>
    )
  }
}
