import React, { Component } from 'react'

import InputField from '../InputField/InputField';

import styles from './registerForm.scss'

export default class RegisterForm extends Component {

  render() {
    // Variables setup
    const forms = this.props.forms
    const handleChange = this.props.handleChange
    const advanceForm = this.props.advanceForm
    const retreatForm = this.props.retreatForm

    let previousButton = null;
    let nextButton = null;

    // Previous and Next Button setup
    if (retreatForm) {
      previousButton = (
        <button type="button" onClick={retreatForm}>Previous</button>
      )
    }
    if (advanceForm) {
      nextButton = (
        <button type="button" onClick={advanceForm}>Next</button>
      )
    }

    return(
      <div>
        <div>
  				{forms.map((config, index) =>
            (
              <InputField key={index} config={config} handleChange={handleChange}/>
            )
          )}
  			</div>

        <div>
          {previousButton}
          {nextButton}
        </div>
      </div>
    )
  }
}
