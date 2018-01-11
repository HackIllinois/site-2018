import React, { Component } from 'react'

// Components
import RegisterNav from '../registerNav/registerNav';
import RegisterForm from '../registerForm/registerForm';
import RegisterTeam from '../registerTeam/registerTeam';
import RegisterReview from '../registerReview/registerReview'
import {personal_forms, profressional_forms} from './registerFieldsConfig'

import styles from './register.scss'
import axios from 'axios';

// ES6 React Component:
export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      attendee: {}
    };
  };

  // ---
  // Handlers
  // ---
  handleChange = (prop, name) => event => {
    this.setState({ [prop]: {...this.state[prop], [name]: event.target.value }});
  };

  advanceForm = (type) => {
    //TODO: validation - type: personal or profressional
    console.log(this.state);
    this.setState({step: this.state.step + 1});
  };

  retreatForm = () => {
    this.setState({step: this.state.step - 1});
  };

  submitForm = () => {
    axios.post('https://api.hackillinois.org//v1/registration/attendee', {
      attendee: {},
      ecosystemInterests: [],
      extras: [],
      collaborators: []
    })
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });
  };

  render() {
    // Variables setup
    const advanceForm  = this.advanceForm
    const retreatForm  = this.retreatForm
    const submitForm   = this.submitForm
    const step         = this.state.step
    const handleChange = this.handleChange

    return(
      <div className="flex-container">
        <div className="nav-container">
          <RegisterNav step={this.state.step}/>
        </div>
        <div className="form-container">
          {
            [
              <RegisterForm retreatForm={null} advanceForm={advanceForm} forms={personal_forms} handleChange={handleChange}/>,
              <RegisterForm retreatForm={retreatForm} advanceForm={advanceForm} forms={profressional_forms} handleChange={handleChange}/>,
              <RegisterTeam retreatForm={retreatForm} advanceForm={advanceForm} handleChange={handleChange}/>,
              <RegisterReview retreatForm={retreatForm} submitForm={submitForm}/>
            ][step]
          }
        </div>
      </div>
    )
  }
}
