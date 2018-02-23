import React, { Component } from 'react'
import styles from './slack.scss'

export default class Slack extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    window.location = 'https://hackillinois-2018.slack.com'
  }

  render() {
    return(
      <div>
        <h3 className="redirect">Redirecting to Slack</h3>
      </div>
    )
  }
}
