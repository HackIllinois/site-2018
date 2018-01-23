import React, { Component } from 'react';
// Components
import RegisterForm from '../registerForm/registerForm';
import RegisterTeam from '../registerTeam/registerTeam';
import RegisterWarning from '../registerWarning/registerWarning';
import RegisterEssay from '../registerEssay/registerEssay';
import RegisterSuccess from '../registerSuccess/registerSuccess';

import { Grid, Dimmer, Loader } from 'semantic-ui-react';
import { personal_fields, professional_fields } from './registerFieldsConfig';
import {uploadAttendeeData, uploadResumeFile, getGithubData, getAttendeeData} from './registerHelper';
import styles from './register.scss'
import axios from 'axios';

// ES6 React Component:
export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      personal: {},
      professional: {},
      collaborators: [{collaborator: ''}],
      warning: false,
      longForm: [{info:''}],
      newRegistration: true,
      resumeInfo: null,
      loading: true,
    };
  };

  componentWillMount() {
    let personal = {};
    personal_fields.map((config, index)=> {
      personal[config.id] = null;
    });

    let professional = {};
    professional_fields.map((config, index)=> {
      professional[config.id] = null;
    });
    this.setState({ personal: personal, professional: professional});
  };

  componentDidMount() {
    this.setState({ loading: true });

    let {personal, professional} = this.state;
    getGithubData().then(githubData => {
      personal['github'] = githubData.user.githubHandle;
      personal['email'] = githubData.user.email;
      this.setState({ personal: personal});

      if (githubData.roles != null && githubData.roles.length > 0) {
        getAttendeeData().then(attendeeData => {
          const {collaborators, longForm, resume, id} = attendeeData;
          console.log(attendeeData);
          for (let key of Object.keys(attendeeData)) {
            // exception
            console.log(key);
            if (key == 'osContributors') {
              professional['osContributors'] = attendeeData.osContributors[0].osContributor;
            }
            else if (key == 'resume') {
              this.setState({ resumeInfo: attendeeData.resume});
              professional['resume'] = attendeeData.resume.key || '';
              console.log(attendeeData.resume);
              console.log(attendeeData.resume.key);
            }
            else if (key == 'hasLightningInterest') {
              professional['hasLightningInterest'] = attendeeData.hasLightningInterest ? true: false;
            }
            else if (key in personal) {
              personal[key] = attendeeData[key];
            }
            else if (key in professional) {
              professional[key] = attendeeData[key];
            }
          }
          this.setState({loading: false, newRegistration: false, personal: personal, professional: professional, collaborators: collaborators, longForm: longForm});
        })
        .catch(error => {
          this.setState({loading: false});
        });
      }
      else {
        this.setState({loading: false});
      }
    })
    .catch(error => {
      this.setState({loading: false});
      this.props.history.push("/start");
    });
  };

  convertDataForAPI = () => {
    const { personal, professional, collaborators, longForm } = this.state;
    const osContributors = [{
      osContributor: professional['osContributors'] || 'N/A'
    }];

    const resume = professional['resume'];

    let attendee = {};
    Object.assign(attendee, personal, professional);
    delete attendee['osContributors'];
    delete attendee['resume'];
    delete attendee['email'];

    let data = {
      attendee: attendee,
      osContributors: osContributors
    };
    if (longForm != null) {
      console.log(longForm);
      if (longForm[0] != null) {
        if (longForm[0].info != '') {
          data.longForm = longForm
        }
      }
    }
    if (collaborators !=null) {
      data.collaborators = collaborators
    }

    return {
      attendeeData: data,
      resumeFile : resume
    }
  }

  submitForm = prop => data => {
    const { step } = this.state;
    this.setState({ [prop]: data }, () => {
      this.setState({ loading: true });

      const { attendeeData, resumeFile } = this.convertDataForAPI();
      const { newRegistration, resumeInfo } = this.state;
      const attendeeMethod = newRegistration ? 'post' : 'put';
      // POST attendee
      uploadAttendeeData(attendeeMethod, attendeeData).then(response => {
        
        if (resumeInfo == null || resumeFile != resumeInfo.key) {
          console.log('uploadFile');
          let reader = new FileReader();
          reader.onload = (event) => {
            const resumeData    = event.target.result;
            const resumeId      = resumeInfo ? resumeInfo.id : '';
            const resumeMethod  = resumeInfo ? 'put' : 'post';
            const resumeType    = resumeFile.type;
            // POST resume
            uploadResumeFile(resumeMethod, resumeData, resumeId, resumeType).then(response => {
              this.setState({ loading: false, step: 5});
            })
            .catch(error => {
              this.setState({ loading: false });
            });
          };
          reader.readAsArrayBuffer(resumeFile);
        }
        else {
          this.setState({ loading: false, step: 5});
        }
      })
      .catch(error => {
        this.setState({ loading: false });
      });
    });
  };

  nextStep = prop => data => {
    this.setState({ step: this.state.step + 1 , [prop]: data});
  };

  previousStep = prop => data => {
    this.setState({ step: this.state.step - 1, [prop]: data });
  };

  render() {
    // Variables setup
    const nextStep      = this.nextStep;
    const previousStep  = this.previousStep;
    const submitForm    = this.submitForm;
    const state         = this.state;

    return(
      <div className="registerContainer">
        <Dimmer active={state.loading} inverted>
          <Loader size='large'>Loading</Loader>
        </Dimmer>
        {
          [
            <RegisterForm
              key={state.step}
              step={state.step}
              data={state.personal}
              previousStep={null}
              nextStep={nextStep('personal')}
              forms={personal_fields}
            />,
            <RegisterForm
              key={state.step}
              step={state.step}
              data={state.professional}
              previousStep={previousStep('professional')}
              nextStep={nextStep('professional')}
              forms={professional_fields}
            />,
            <RegisterTeam
              step={state.step}
              data={state.collaborators}
              previousStep={previousStep('collaborators')}
              nextStep={nextStep('collaborators')}
            />,
            <RegisterWarning
              step={state.step}
              data={state.warning}
              previousStep={previousStep('warning')}
              nextStep={nextStep('warning')}
              submitForm={submitForm('warning')}
            />,
            <RegisterEssay
              step={state.step}
              data={state.longForm}
              previousStep={previousStep('longForm')}
              submitForm={submitForm('longForm')}
            />,
            <RegisterSuccess />,
          ][state.step]
        }
      </div>
    )
  }
}
