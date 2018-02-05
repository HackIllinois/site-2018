import axios from 'axios';
import {api_url} from '../../../config';

const getAuth = () => {
  sessionStorage.setItem('callback', '/rsvp/yes');
  const token = sessionStorage.getItem("Authorization");
  if (token == null) {
    this.props.history.push("/v1/auth");
  }
};

const sendRsvp = (rsvp, method) => new Promise((resolve, reject) => {
  const token = sessionStorage.getItem("Authorization");
  axios({
    url: api_url + '/v1/rsvp/attendee',
    method: method,
    headers: {
      'Authorization': token,
    },
    params: {
      'isAttending': rsvp,
    },
  })
  .then(response => {
    return resolve(response.data.data);
  })
  .catch(error => {
    console.log(error);
    return reject("RSVP Error");
  });
});

const getRSVPData = () => new Promise((resolve, reject) => {
  const token = sessionStorage.getItem("Authorization");
  axios.get(api_url + "/v1/rsvp/attendee",
    {
      'headers': { 'Authorization': token }
    }
  )
  .then(response => {
    // console.log(response.data.data);
    return resolve(response.data.data);
  })
  .catch(error => {
    // console.log(error);
    return reject('No RSVP Exists'); // rejected
  });
});

export {getAuth, sendRsvp, getRSVPData}
