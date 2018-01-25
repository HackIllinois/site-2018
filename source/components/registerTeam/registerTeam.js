import React, { Component } from 'react'
// Components
import RegisterNav from '../registerNav/registerNav';
import RegisterButtons from '../registerButtons/registerButtons';
import { Grid, Form, Input, Button} from 'semantic-ui-react';
import InputField from '../inputField/inputField';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTimesCircle from '@fortawesome/fontawesome-free-solid/faTimesCircle'

import styles from './registerTeam.scss'

export default class RegisterCollaborators extends Component {

  constructor(props) {
    super(props);

    this.state = {
      collaborators: [{collaborator: ''}],
    };
  };

  componentWillMount() {
    const collaborators = this.props.data;
    if (collaborators == null || collaborators.length == 0 ){
      this.setState({collaborators: [{collaborator: ''}]});
    }
    else {
      this.setState({collaborators: collaborators});
    }
  }

  handleChange = (e, { id, value }) => {
    let updatedCollaborators = this.state.collaborators;
    updatedCollaborators[id].collaborator = value;
    this.setState({ collaborators: updatedCollaborators});
  };

  handleAddCollaborator = (e) => {
    const collaborators = this.state.collaborators;

    // Check if key is enter(13)
    if(e.keyCode == 13 && collaborators.length < 8) {
      let newCollaborators = collaborators.concat({collaborator: ''});
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
    let filteredData = this.state.collaborators.filter(el => el.collaborator != '');

    if (filteredData.length == 0 ){
      filteredData = null;
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
    let removeIcon = <FontAwesomeIcon icon={faTimesCircle}/>;
    return(
      <Grid stackable>
        <img className="leftSquiggly" src='./assets/img/png/squiggly_left.png' />
        <img className="rightSquiggly" src='./assets/img/png/squiggly_right.png' />
        <Grid.Row columns={2}>
          <Grid.Column tablet={4} computer={3}>
            <RegisterNav step={step}/>
          </Grid.Column>
          <Grid.Column className='teamContainer' tablet={12} computer={13}>
            <Grid.Row>
              Interested in working with a team? Let us know up to eight people who you prefer to work with via their GitHub username. We don't have team size limits during the event; however, we may not be able to accommodate your whole team.
            </Grid.Row>
            <Grid.Row className='inputContainer'>
              <Form onKeyUp={handleAddCollaborator}>
                {collaborators.map((data, index) =>
                  <Form.Field
                    className="inputField"
                    control={Input}
                    id={index}
                    key={index}
                    onChange={handleChange}
                    value={data.collaborator}
                    placeholder='Add team member’s GitHub username, press enter to add another'
                    action={
                      <Button attached='right' id={index} onClick={handleRemoveCollaborator} icon={removeIcon}/>
                    }
                  />
                )}
              </Form>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
        <RegisterButtons previousStep={() => previousStep(collaborators)} nextStep={() => validateStep()} />
      </Grid>
    )
  }
}
