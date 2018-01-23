import React, { Component } from 'react'
import { Grid, Form, Button, Image} from 'semantic-ui-react';
import styles from './registerStart.scss'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import faCaretRight from '@fortawesome/fontawesome-free-solid/faCaretRight'

export default class RegisterStart extends Component {
  render() {
    return(
      <Grid centered textAlign='center' verticalAlign='middle'>
        <img className="backgroundImage leftButton" src='./assets/img/png/squiggly_left.png' />
        <img className="backgroundImage rightButton" src='./assets/img/png/squiggly_right.png' />
        <Grid.Row className='startContainer'>
          <Grid.Column mobile={14} computer={8} textAlign='center' verticalAlign='middle'>
            <Grid.Row className='verticalPadding'>
              <Image style={{margin: 'auto'}} src='./assets/img/png/hackillinois_logo.png' size='small' />
            </Grid.Row>
            <Grid.Row className='startPrompt verticalPadding'>
              HackIllinois is an Open Source hackathon where experts and beginners in Open Source can work together to contribute to the world of Open Source. Whether you are creating a new Open Source project or working with <a href="https://github.com/brson" target="_blank">Brian Anderson</a> on the Rust programming language, HackIllinois gives you the opportunity to contribute to the Open Source community.
            </Grid.Row>
            <Grid.Row className='verticalPadding'>
              <a href="https://opensource.com/article/17/10/openstack-project-contribution-benefits" target="_blank"><Button>Why Open Source?</Button></a>
              <a href="https://opensource.guide/how-to-contribute/" target="_blank"><Button>How to Contribute to OS</Button></a>
            </Grid.Row>
            <Grid.Row className="ghPrompt ghPadding">
              A GitHub account is critical for Open Source contributions so please make one if you do not have one already!
            </Grid.Row>
            <Grid.Row className='continueButton'>
              <Button icon size='small' labelPosition='left' onClick={() => window.location = "https://api.hackillinois.org/v1/auth"}>
                <span className="FAIconText">LOG IN WITH GITHUB</span>
                <FontAwesomeIcon icon={faCaretRight} size="2x"/>
              </Button>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
