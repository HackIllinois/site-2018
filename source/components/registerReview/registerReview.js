import React, { Component } from 'react'

import styles from './registerReview.scss'

export default class RegisterReview extends Component {
    render() {
        // Variables setup
        const submitForm = this.props.submitForm
        const retreatForm = this.props.retreatForm

        return(
            <div>
              RegisterReview
              <button type="button" onClick={retreatForm}>Preivous</button>
              <button type="button" onClick={submitForm}>Submit</button>
            </div>
        )
    }
}
