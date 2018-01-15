import React, { Component } from 'react'
import { Grid, TextArea, Form} from 'semantic-ui-react';
import styles from './registerEssay.scss'

import RegisterButtons from '../registerButtons/registerButtons';

export default class RegisterEssay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      essay: '',
    };
  };

  handleChange = (e, {name, value}) => {
    this.setState({[name]: value});
  };

  validateStep = () => {
    const id        = this.state.id;
    const essay     = this.state.essay;
    const nextStep  = this.props.nextStep;

    nextStep(id, essay);
  };


  render() {
    const previousStep  = this.props.previousStep;
    const validateStep  = this.validateStep;
    const handleChange  = this.handleChange;

    return(
      <Grid centered textAlign='center' verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column mobile={14} computer={10} textAlign='left'>
            <Grid.Row className='essayMessage'>
              Here’s some space to add some optional content to your application. Feel free to use one or more of the prompts below or write anything else you believe can be valuable to your application.
              <br/>
              <ul>
                <li>Projects that you’ve worked on outside of classes, work, hackathons - effort</li>
                <li>Contributing to an idea that was not your own - teamwork</li>
                <li>What about open source appeals to you - interest in open source</li>
              </ul>
            </Grid.Row>
            <Grid.Row className='essayTextArea'>
              <Form>
                <TextArea onChange={handleChange} name='essay' autoHeight placeholder='Write to your heart’s content.' style={{ minHeight: '15em' }} />
              </Form>
            </Grid.Row>

          </Grid.Column>
        </Grid.Row>
        <RegisterButtons previousStep={previousStep} nextStep={validateStep} />
      </Grid>
    )
  }
}
