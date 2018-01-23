import React, { Component } from 'react'
import { Grid, TextArea, Form, Transition} from 'semantic-ui-react';

import styles from './registerEssay.scss'

import RegisterNav from '../registerNav/registerNav';
import RegisterButtons from '../registerButtons/registerButtons';

export default class RegisterEssay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      longForm: [{info:''}],
      visible: true
    };
  };

  componentWillMount() {
    const longForm = this.props.data;
    if (longForm == null || longForm.length == 0) {
      this.setState({ longForm: [{info:''}] });
    }
    else {
      this.setState({ longForm: longForm });
    }
  }

  handleChange = (e, {value}) => {
    let longForm = this.state.longForm;
    if (value.length <= 16383) {
      longForm[0].info = value;
      this.setState({longForm: longForm});
    } else {
      this.setState({ visible: !this.state.visible });
    }
  };

  validateStep = () => {
    const submitForm  = this.props.submitForm;
    let longForm  = this.state.longForm;

    if (longForm[0].info == ''){
      longForm = null;
    }
    submitForm(longForm);
  };

  render() {
    const step          = this.props.step;
    const previousStep  = this.props.previousStep;
    const validateStep  = this.validateStep;
    const handleChange  = this.handleChange;
    const longForm      = this.state.longForm;
    const essay         = longForm[0].info;
    const visible       = this.state.visible;

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
                <li>Projects that you’ve worked on outside of classes, work, hackathons</li>
                <li>Contributing to an idea that was not your own</li>
                <li>What about open source appeals to you</li>
              </ul>
            </Grid.Row>
            <Grid.Row className='essayTextArea'>
            <Transition animation='shake' duration='300' visible={visible}>
              <Form>
                <TextArea onChange={handleChange} value={essay} name='essay' autoHeight placeholder='Write as much or as little as you would like.' style={{ minHeight: '15em' }} />
              </Form>
            </Transition>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
        <RegisterButtons nextTitle="SUBMIT" previousStep={() => previousStep(longForm)} submitForm={validateStep} />
      </Grid>
    )
  }
}
