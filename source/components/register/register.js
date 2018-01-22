import React, { Component } from 'react';
// Components
import RegisterForm from '../registerForm/registerForm';
import RegisterTeam from '../registerTeam/registerTeam';
import RegisterWarning from '../registerWarning/registerWarning';
import RegisterEssay from '../registerEssay/registerEssay';
import RegisterSuccess from '../registerSuccess/registerSuccess';

import { Grid } from 'semantic-ui-react'
import { personal_fields, professional_fields } from './registerFieldsConfig'

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
      resumeInfo: null
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
    let {personal, professional} = this.state;
    this.getGithubData
      .then(githubData => {
        personal['github'] = githubData['githubHandle'];
        personal['email'] = githubData['email'];
        this.setState({ personal: personal});

        this.checkUserExists(githubData.id).then(data => {
          if (data.role != null) {
            console.log("getAttendeeData");
            this.getAttendeeData.then(data => {
              const {collaborators, longForm, resume, id} = data;
              for (let key of Object.keys(data)) {
                // exception
                if (key == 'osContributors') {
                  professional['osContributors'] = data.osContributors[0].osContributor;
                }
                else if (key == 'resume') {
                  this.setState({ resumeInfo: data.resume});
                  professional['resume'] = data.resume.key || '';
                }
                else if (key == 'hasLightningInterest') {
                  professional['hasLightningInterest'] = data.hasLightningInterest ? true: false;
                }
                else if (key in personal) {
                  personal[key] = data[key];
                }
                else if (key in professional) {
                  professional[key] = data[key];
                }
              }
              this.setState({newRegistration: false, personal: personal, professional: professional, collaborators: collaborators, longForm: longForm});
            })
            .catch(error => {
              console.log(error);
            });
          }
          else{
            console.log("Dont get attendee");
          }
        });
      })
      .catch(error => {
        console.log(error);
        //ERROR
        this.props.history.push("/start");
      });
  };

  checkUserExists = (id) => new Promise((resolve, reject) => {
    const token = sessionStorage.getItem("Authorization");
    axios.get("http://api.test.hackillinois.org/v1/user/" + id,
      {
        'headers': { 'Authorization': token }
      }
    )
    .then(response => {
      console.log(response.data.data);
      return resolve(response.data.data);
    })
    .catch(error => {
      console.log(error);
      return reject("checkUserExists Error"); // rejected
    });
  });

  getGithubData = new Promise((resolve, reject) => {
    const token = sessionStorage.getItem("Authorization");
    if (token == null) {
      this.props.history.push("/start");
    }
    else {
      axios.get("http://api.test.hackillinois.org/v1/user/",
        {
          'headers': { 'Authorization': token }
        }
      )
      .then(response => {
        return resolve(response.data.data);
      })
      .catch(error => {
        console.log(error);
        return reject("GithubData Error"); // rejected
      });
    }
  });

  getAttendeeData = new Promise((resolve, reject) => {
    const token = sessionStorage.getItem("Authorization");
    axios.get("http://api.test.hackillinois.org/v1/registration/attendee ",
      {
        'headers': { 'Authorization': token }
      }
    )
    .then(response => {
      console.log(response.data.data);
      resolve(response.data.data);
    })
    .catch(error => {
      console.log(error);
      reject("AttendeeData Error"); // rejected
    });
  });

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
    if (longForm != null){
      data.longForm = longForm
    }
    if (collaborators !=null) {
      data.collaborators = collaborators
    }

    return {
      data: data,
      file : resume
    }
  }

  nextStep = (submit, prop) => data => {
    const { step, newRegistration, resumeInfo } = this.state;
    const { resume } = this.state.professional;
    // Update data
    this.setState({ [prop]: data }, () => {
      // Check if we need to make api call to make submission
      if (submit) {
        // upload resume file

        const {data, file} = this.convertDataForAPI();
        // POST registeration
        const token = sessionStorage.getItem("Authorization");
        axios({
          url: 'http://api.test.hackillinois.org/v1/registration/attendee',
          method: newRegistration ? 'post' : 'put',
          data: data,
          headers: { 'Authorization': token }
        })
        .then(response => {
          let reader = new FileReader();
          reader.onload = (event) => {
            const data = event.target.result;
            const resumeId = resumeInfo == null ? '' : resumeInfo.id;
            const requestType = resumeInfo == null ? 'post' : 'put';
            axios({
              url: 'http://api.test.hackillinois.org/v1/upload/resume' + resumeId,
              method: requestType,
              data: data,
              headers: {
                'Authorization': token,
                'Content-Type': file.type,
                'Content-Length': file.size
              }
            })
            .then(response => {
              this.setState({ submissionStatus: 'success', step: step + 1});
            })
            .catch(error => {
              console.log(error);
              this.setState({ submissionStatus: 'fail'});
            });
          }
          reader.readAsArrayBuffer(file);
        })
        .catch(error => {
          console.log(error);
          this.setState({ submissionStatus: 'fail'});
        });
      }
      else {
        this.setState({ step: step + 1});
      }
    });
  };

  previousStep = prop => data => {
    this.setState({ step: this.state.step - 1, [prop]: data });
  };

  render() {
    // Variables setup
    const nextStep      = this.nextStep;
    const previousStep  = this.previousStep;
    const state         = this.state;

    return(
      <div className="registerContainer">
        {
          [
            <RegisterForm
              key={state.step}
              step={state.step}
              data={state.personal}
              previousStep={null}
              nextStep={nextStep(false, 'personal')}
              forms={personal_fields}
            />,
            <RegisterForm
              key={state.step}
              step={state.step}
              data={state.professional}
              previousStep={previousStep('professional')}
              nextStep={nextStep(false, 'professional')}
              forms={professional_fields}
            />,
            <RegisterTeam
              step={state.step}
              data={state.collaborators}
              previousStep={previousStep('collaborators')}
              nextStep={nextStep(false, 'collaborators')}
            />,
            <RegisterWarning
              step={state.step}
              data={state.warning}
              previousStep={previousStep('warning')}
              nextStep={nextStep(false, 'warning')}
            />,
            <RegisterEssay
              step={state.step}
              data={state.longForm}
              previousStep={previousStep('longForm')}
              nextStep={nextStep(true, 'longForm')}
            />,
            <RegisterSuccess />,
          ][state.step]
        }
      </div>
    )
  }
}
