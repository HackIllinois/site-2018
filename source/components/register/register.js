import React, { Component } from 'react'

// Components
import RegisterNav from '../registerNav/registerNav';
import RegisterForm from '../registerForm/registerForm';
import RegisterTeam from '../registerTeam/registerTeam';
import RegisterReview from '../registerReview/registerReview'
import {personal_fields, profressional_fields} from './registerFieldsConfig'

import styles from './register.scss'
import axios from 'axios';

// ES6 React Component:
export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      attendee: {},
      ecosystemInterests: [],
      extras: [],
      collaborators: []
    };
  };

  // ---
  // Handlers
  // ---
  handleChange = (prop, name) => event => {
    this.setState({ [prop]: {...this.state[prop], [name]: event.target.value }});
  };

  advanceForm = (type) => {
    //TODO: validation - type: personal or profressional OR use semantic (Need Simon's input)
    this.setState({step: this.state.step + 1});
  };

  retreatForm = () => {
    this.setState({step: this.state.step - 1});
  };

  submitForm = () => {
    console.log(this.state.attendee);
    console.log(this.state.collaborators);
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
              <RegisterForm prop={'attendee'} retreatForm={null} advanceForm={advanceForm} forms={personal_fields} handleChange={handleChange}/>,
              <RegisterForm prop={'attendee'} retreatForm={retreatForm} advanceForm={advanceForm} forms={profressional_fields} handleChange={handleChange}/>,
              <RegisterTeam prop={'collaborators'} retreatForm={retreatForm} submitForm={submitForm} handleChange={handleChange}/>,
            ][step]
          }
        </div>
      </div>
    )
  }
}
