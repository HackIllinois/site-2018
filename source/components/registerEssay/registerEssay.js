import React, { Component } from 'react'
import { Grid, TextArea, Form} from 'semantic-ui-react';
import styles from './registerEssay.scss'

import RegisterNav from '../registerNav/registerNav';
import RegisterButtons from '../registerButtons/registerButtons';

export default class RegisterEssay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      essay: '',
    };
  };

  componentWillMount() {
    this.setState({ essay: this.props.data });
  }

  handleChange = (e, {name, value}) => {
    this.setState({[name]: value});
  };

  validateStep = () => {
    const essay     = this.state.essay;
    const nextStep  = this.props.nextStep;

    nextStep(essay);
  };

  render() {
    const step          = this.props.step;
    const previousStep  = this.props.previousStep;
    const validateStep  = this.validateStep;
    const handleChange  = this.handleChange;
    const essay         = this.state.essay;
    console.log(essay);

    return(
      <Grid stackable textAlign='center' verticalAlign='middle'>
        <Grid.Row columns={2}>
          <Grid.Column mobile={16} tablet={4} computer={3}>
            <RegisterNav step={step}/>
          </Grid.Column>
          <Grid.Column className='essayContainer' mobile={16} tablet={12} computer={13} textAlign='left' verticalAlign='middle'>
            <Grid.Row className='essayPrompt'>
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
                <TextArea onChange={handleChange} value={essay} name='essay' autoHeight placeholder='Write to your heart’s content.' style={{ minHeight: '15em' }} />
              </Form>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
        <RegisterButtons nextTitle="SUBMIT" previousStep={() => previousStep(essay)} nextStep={validateStep} />
      </Grid>
    )
  }
}
