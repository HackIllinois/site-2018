import React, { Component } from 'react'
import { Grid, Form, Select, Icon, Input } from 'semantic-ui-react'

import styles from './inputField.scss'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import faTimes from '@fortawesome/fontawesome-free-solid/faTimes'
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck'
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
    const handleChange  = this.props.handleChange;
    const value         = String(this.props.value) == 'null' ? '' : String(this.props.value);
    const iconCheck = <FontAwesomeIcon className="right" icon={faCheck} />;
    const iconMinus = <FontAwesomeIcon className="right" icon={faTimes} />;
    let field = null;

    if (fieldType == 'input' && inputType =='file') {
      field =
        <Form.Field
          className="inputField"
          control={Input}
          type={inputType}
          accept=".pdf"
          name={id}
          onChange={handleChange}
          placeholder={placeholder}
          action={
            value == '' ? iconMinus : iconCheck
          }
        />;
    }
    else if (fieldType == 'input') {
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
          disabled={id == 'email' || id == 'github'}
        />;
    }
    if (fieldType == 'select') {
      field =
        <Form.Field
          className="selectField"
          control={Select}
          type={inputType}
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
