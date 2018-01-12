import React, { Component } from 'react'

import styles from './inputField.scss'

export default class InputField extends Component {
  render() {
    // Variables setup
    const fieldType = this.props.config.fieldType 
    const inputType = this.props.config.inputType
    const options = this.props.config.options
    const id = this.props.config.id
    const placeholder = this.props.config.placeholder
    const title = this.props.config.title
    const required = this.props.config.required || true
    const handleChange = this.props.handleChange
    const prop = this.props.prop

    let field = null

    // input or select Setup
    if (fieldType == 'input') {
      field = 
        <input type={inputType} id={id} name={id} onChange={handleChange(prop, id)} placeholder={placeholder} required={required}/>;
    }
    if (fieldType == 'select') {
      field = 
        <select id={id} name={id} onChange={handleChange(prop, id)} required={required}>
          {options.map((option, index) => 
            <option key={index} value={option}> {option} </option>
          )}
        </select>;
    }

    return(
      <div>
        <div>
          {title}
        </div>
        <div>
          {field}
        </div>
      </div>
    )
  }
}
