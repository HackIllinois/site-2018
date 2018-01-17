import React, { Component } from 'react'
import { Grid, Form, Select, Icon, Input } from 'semantic-ui-react'

import styles from './inputField.scss'

export default class InputField extends Component {

  render() {
    // Variables setup
    const fieldType     = this.props.config.fieldType
    const inputType     = this.props.config.inputType
    const options       = this.props.config.options
    const id            = this.props.config.id
    const title         = this.props.config.title
    const width         = this.props.config.width;
    const placeholder   = this.props.config.placeholder
    const handleChange  = this.props.handleChange
    const value         = this.props.value || ''

    let field = null

    // input or select Setup
    if (fieldType == 'input') {
      field =
        <Form.Field
          className="inputField"
          control={Input}
          type={inputType}
          min="1"
          max="50"
          value={value}
          name={id}
          onChange={handleChange}
          placeholder={placeholder}
        />;
    }
    if (fieldType == 'select') {
      field =
        <Form.Field
          className="selectField"
          control={Select}
          options={options}
          value={value}
          name={id}
          onChange={handleChange}
          placeholder={placeholder}
        />;
    }

    return(
      <div className='fieldContainer'>
        <div className='fieldTitle'>
          {title}
        </div>
        <div>
          {field}
        </div>
      </div>
    )
  }
}
