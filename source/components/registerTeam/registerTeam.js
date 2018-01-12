import React, { Component } from 'react'

import styles from './registerTeam.scss'

export default class RegisterTeam extends Component {

  constructor(props) {
    super(props);

    this.state = {
      collaborators: ['']
    };
  };

  handle = event => {
    event.preventDefault();
    let newCollaborator = '';
    this.setState({ collaborators: this.state.collaborators.concat(newCollaborator) });
  };

  render() {
    // Variables setup
    const prop = this.props.prop
    const handleChange = this.props.handleChange
    const submitForm = this.props.submitForm
    const retreatForm = this.props.retreatForm
    const collaborators = this.state.collaborators; 

    return(
        <div>
          <div>
            Interested in working with a team? Let us know who you prefer to work with via their GitHub username. We don't have team size limits; however, we may not be able to accommodate your whole team.
          </div>
          <form onSubmit={this.handleEnter} onKeyUp={this.handleEnter}>
            {collaborators.map((collaborator) => <input type="input" key={collaborator} value={collaborator}/>)}
          </form>
          <div>
            <button type="button" onClick={retreatForm}>Preivous</button>
            <button type="button" onClick={submitForm}>Submit</button>
          </div>
        </div>
    )
  }
}
