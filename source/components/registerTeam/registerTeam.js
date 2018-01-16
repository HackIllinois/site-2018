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

  componentWillMount() {
    this.setState({ data: this.props.data });
  }

  addNewCollaborator = () => {
    let newCollaborator = '';
    this.setState({ data: this.state.data.concat(newCollaborator) });
  };

  removeCollaborator = (e, {name}) => {
    const data = this.state.data;

    if (name > 0 || data.length > 1) {
      data.splice(name, 1);
      this.setState({ data: data });
    }
  };

  handleChange = (e, { name, value }) => {
    let updatedData = this.state.data;
    updatedData[name] = value;
    this.setState({ data: updatedData});
    console.log(this.state);
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
    const handleKeyup        = this.handleKeyup;

    return(
      <Grid stackable>
        <Grid.Row columns={2}>
          <Grid.Column tablet={4} computer={3}>
            <RegisterNav step={step}/>
          </Grid.Column>
          <Grid.Column className='teamContainer' tablet={12} computer={13}>
            <Grid.Row>
              Interested in working with a team? Let us know who you prefer to work with via their GitHub username. We don't have team size limits; however, we may not be able to accommodate your whole team.
            </Grid.Row>
            <Grid.Row className='inputContainer'>
              <Form onKeyUp={handleKeyup}>
                {data.map((collaborator, index) =>
                  <Form.Field
                    className="inputField"
                    control={Input}
                    key={index}
                    name={index}
                    onChange={handleChange}
                    value={collaborator}
                    placeholder='Add team member, press enter to add another'
                    action={<Button attached='right' name={index} icon='remove' onClick={removeCollaborator} />}
                  />
                )}
              </Form>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
        <RegisterButtons previousStep={previousStep} nextStep={validateForm} />
      </Grid>
    )
  }
}
