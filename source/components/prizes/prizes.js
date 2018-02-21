import React, { Component } from 'react'
import { Grid, Button, Icon} from 'semantic-ui-react';
import DayOfLayout from '../dayOfLayout/dayOfLayout';

import styles from './prizes.scss'

export default class Prizes extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  };

  componentWillMount() {

  };

  render() {
    const content = (
      <div className="prizeContainer">
        <div className="prizeTitle">
          Title
        </div>
        Content
      </div>
    )

    return(
      <DayOfLayout title='Prizes' content={content}/>
    )
  }
}
