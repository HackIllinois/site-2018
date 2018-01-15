import React, { Component } from 'react';
// Components
import RegisterNav from '../registerNav/registerNav';
import InputField from '../inputField/inputField';
import RegisterButtons from '../registerButtons/registerButtons';
import { Grid, Form} from 'semantic-ui-react';

import styles from './registerForm.scss'

export default class RegisterForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  };

  componentWillMount() {
    this.setState({ data: this.props.data });
  }

  handleChange = (e, { name, value }) => {
    this.setState({ data: {...this.state.data, [name]: value }});
  };

  checkProperties = (object) => {
    for (var key in object) {
      if (object[key] === null || object[key] == "") {
        return false;
      }
    }
    return true;
  };

  validateForm = () => {
    const id        = this.props.id;
    const data      = this.state.data;
    const nextStep  = this.props.nextStep;

    // if(this.checkProperties(data)) {
    //   nextStep(id, data);
    // }
    nextStep(id, data);
  };

  render() {
    // Variables setup
    const step          = this.props.step;
    const forms         = this.props.forms;
    const previousStep  = this.props.previousStep;
    const validateForm  = this.validateForm;
    const handleChange  = this.handleChange;
    const data          = this.state.data;

    return(
      <Grid stackable centered>
        <Grid.Row className='container'>
          <Grid.Column tablet={4} computer={2} floated='left'>
            <RegisterNav step={step}/>
          </Grid.Column>
          <Grid.Column tablet={12} computer={14}>
            <Form size='small'>
              <Grid columns={2} centered stackable>
                {forms.map((config, index) =>
                  <Grid.Column computer={config.width.computer} tablet={config.width.tablet} key={index}>
                    <InputField value={data[config.id]} config={config} handleChange={handleChange}/>
                  </Grid.Column>
                )}
              </Grid>
            </Form>
          </Grid.Column>
        </Grid.Row>

        <RegisterButtons previousStep={previousStep} nextStep={validateForm} />
      </Grid>
    )
  }
}
