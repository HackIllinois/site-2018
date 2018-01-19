import React, { Component } from 'react'
import { Grid, Form, Button, Image, Icon} from 'semantic-ui-react';
import styles from './registerStart.scss'
export default class RegisterStart extends Component {
  render() {

    const nextStep  = this.props.nextStep;

    return(
      <Grid centered textAlign='center' verticalAlign='middle'>
        <Grid.Row className='startContainer'>
          <Grid.Column mobile={14} computer={8} textAlign='center' verticalAlign='middle'>
            <Grid.Row className='verticalPadding'>
              <Image style={{margin: 'auto'}} src='./assets/img/png/hackillinois_logo.png' size='small' />
            </Grid.Row>
            <Grid.Row className='startPrompt verticalPadding'>
              HackIllinois is an open source hackathon where experts and beginners in open source can work together to contribute to the world of open source. Whether you are creating a new open source project or working with Brian Anderson(link to his github) on the Rust programming language, HackIllinois gives you the opportunity to contribute to the open source community.
            </Grid.Row>
            <Grid.Row className='verticalPadding'>
              <Button>Why Open Source?</Button>
              <Button>How to Contribute to OS?</Button>
            </Grid.Row>
            <Grid.Row className='continueButton'>
              <Button icon size='small' labelPosition='right' onClick={nextStep}>
                TO CONTINUE, CLICK TO LOG IN WITH GITHUB
                <Icon name='caret right' />
              </Button>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
