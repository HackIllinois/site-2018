import React, { Component } from 'react'

import InputField from '../InputField/InputField';

import styles from './registerForm.scss'

export default class RegisterForm extends Component {

  render() {
    // Variables setup
    const prop = this.props.prop
    const forms = this.props.forms
    const handleChange = this.props.handleChange
    const advanceForm = this.props.advanceForm
    const retreatForm = this.props.retreatForm

    // Previous and Next Button setup
    let previousButton = retreatForm ? <button type="button" onClick={retreatForm}>Previous</button> : null;
    let  nextButton = advanceForm ? <button type="button" onClick={advanceForm}>Next</button> : null;

    return(
      <div>
        <div>
  				{forms.map((config, index) =>
            <InputField key={index} config={config} handleChange={handleChange} prop={prop}/>
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
