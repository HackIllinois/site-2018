import React, { Component } from 'react'
// Components
import RegisterNav from '../registerNav/registerNav';
import RegisterButtons from '../registerButtons/registerButtons';
import { Grid, Form, Input, Button} from 'semantic-ui-react';
import InputField from '../inputField/inputField';

import styles from './registerTeam.scss'

export default class RegisterTeam extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: ['']
    };
  };

  addNewCollaborator = () => {
    let newCollaborator = '';
    this.setState({ data: this.state.data.concat(newCollaborator) });
  };

  removeCollaborator = (e, data) => {
    console.log(data);
    this.setState({ data: this.state.data.slice(index, 1) });
  };

  handleChange = (e, { name, value }) => {
    let updatedData = this.state.data;
    updatedData[name] = value;
    this.setState({ data: updatedData});
  };

  handleKeyup = (e) => {
    if(e.keyCode == 13) {
      this.addNewCollaborator();
    }
  }

  validateForm = () => {
    const id        = this.props.id;
    const data      = this.state.data;
    const nextStep  = this.props.nextStep;

    let filteredData = data.filter(el => el !== '')
    nextStep(id, filteredData);
  };

  render() {
    // Variables setup
    const step          = this.props.step;
    const previousStep  = this.props.previousStep;
    const data          = this.state.data;
    const validateForm  = this.validateForm;
    const handleChange  = this.handleChange;
    const removeCollaborator = this.removeCollaborator;

    return(
      <Grid stackable centered>
        <Grid.Row className='container'>
          <Grid.Column tablet={4} computer={2} floated='left'>
            <RegisterNav step={step}/>
          </Grid.Column>
          <Grid.Column tablet={12} computer={14}>
            <Form className='teamContainer' onKeyUp={this.handleKeyup}>
              <div className='teamHeader'>
                Interested in working with a team? Let us know who you prefer to work with via their GitHub username. We don't have team size limits; however, we may not be able to accommodate your whole team.
              </div>
              <div className='teamInput'>
                {data.map((collaborator, index) =>
                  <Form.Field
                    className="inputField"
                    control={Input}
                    key={index}
                    name={index}
                    onChange={handleChange}
                    value={collaborator}
                    placeholder='Add team member, press enter to add another'
                    action={<Button name={index} icon='remove' onClick={removeCollaborator} />}
                  />
                )}
              </div>
            </Form>
          </Grid.Column>
        </Grid.Row>

        <RegisterButtons previousStep={previousStep} nextStep={validateForm}/>
      </Grid>

    )
  }
}
