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
      collaborators: ['']
    };
  };

  componentWillMount() {
    this.setState({ collaborators: this.props.data });
  }

  handleChange = (e, { id, value }) => {
    let updatedCollaborators = this.state.collaborators;
    updatedCollaborators[id] = value;
    this.setState({ collaborators: updatedCollaborators});
  };

  handleAddCollaborator = (e) => {
    // Check if key is enter(13)
    if(e.keyCode == 13) {
      let newCollaborators = this.state.collaborators.concat('');
      this.setState({ collaborators: newCollaborators });
    }
  }

  handleRemoveCollaborator = (e, {id}) => {
    const removeCollaborators = this.state.collaborators;

    // Only remove if there are more than one collaborators
    if (id > 0 || removeCollaborators.length > 1) {
      removeCollaborators.splice(id, 1);
      this.setState({ collaborators: removeCollaborators });
    }
  };

  validateStep = () => {
    const nextStep  = this.props.nextStep;
    let filteredData = this.state.collaborators.filter(el => el !== '');

    if (filteredData.length == 0) {
      filteredData = [''];
    }

    nextStep(filteredData);
  };

  render() {
    // Variables setup
    const step          = this.props.step;
    const previousStep  = this.props.previousStep;
    const collaborators = this.state.collaborators;
    const validateStep  = this.validateStep;
    const handleChange  = this.handleChange;
    const handleAddCollaborator = this.handleAddCollaborator;
    const handleRemoveCollaborator = this.handleRemoveCollaborator;

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
              <Form onKeyUp={handleAddCollaborator}>
                {collaborators.map((collaborator, index) =>
                  <Form.Field
                    className="inputField"
                    control={Input}
                    id={index}
                    key={index}
                    onChange={handleChange}
                    value={collaborator}
                    placeholder='Add team member, press enter to add another'
                    action={
                      <Button attached='right' id={index} icon='remove' onClick={handleRemoveCollaborator} />
                    }
                  />
                )}
              </Form>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
        <RegisterButtons previousStep={() => previousStep(collaborators)} nextStep={validateStep} />
      </Grid>
    )
  }
}