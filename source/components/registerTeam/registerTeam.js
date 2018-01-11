import React, { Component } from 'react'

import styles from './registerTeam.scss'

export default class RegisterTeam extends Component {
    render() {
        // Variables setup
        const advanceForm = this.props.advanceForm
        const retreatForm = this.props.retreatForm

        return(
            <div>
              RegisterTeam
              <button type="button" onClick={retreatForm}>Preivous</button>
              <button type="button" onClick={advanceForm}>Next</button>
            </div>
        )
    }
}
