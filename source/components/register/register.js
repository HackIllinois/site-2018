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

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-46010489-2', {
      'cookieDomain': 'hackillinois.org'
  });
  

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
      attendeeEmail: ''
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

          for (let key of Object.keys(attendeeData)) {
            // exception
            if (key == 'osContributors') {
              professional['osContributors'] = attendeeData.osContributors[0].osContributor;
            }
            else if (key == 'resume') {
              this.setState({ resumeInfo: attendeeData.resume});
              professional['resume'] = attendeeData.resume.key || '';
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
          this.props.history.push("/error");
        });
      }
      else {
        this.setState({loading: false});
      }
    })
    .catch(error => {
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
    this.state.attendeeEmail = attendee['email']
    delete attendee['email'];

    let data = {
      attendee: attendee,
      osContributors: osContributors
    };

    if (longForm != null && longForm[0] && longForm[0].info != '') {
      data.longForm = longForm
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
              if (ga) {
                ga('send', 'exception', {
                  'exDescription': '/attendee resume upload: ' + this.state.attendeeEmail + " " + JSON.stringify(error),
                  'exFatal': true
                })
              this.props.history.push("/error");
              }
            });
          };
          reader.readAsArrayBuffer(resumeFile);
        }
        else {
          this.setState({ loading: false, step: 5});
          if (ga) {
            ga('send', 'exception', {
                'exDescription': '/attendee resume error: ' + this.state.attendeeEmail + " " + JSON.stringify(error),
                'exFatal': true
            })
          }

        }
      })
      .catch(error => {
        this.setState({ loading: false });
        if (ga) {
          ga('send', 'exception', {
            'exDescription': '/attendee attendee data: ' + this.state.attendeeEmail + " " + JSON.stringify(error),
            'exFatal': true
          })
        }
        this.props.history.push("/error");
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
