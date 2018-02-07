import axios from 'axios';
import {api_url} from '../../../config';

const getAuth = () => new Promise((resolve, reject) => {
  const token = sessionStorage.getItem("Authorization");
  console.log(token);
  if (token == null) {
    window.location = api_url + "/v1/auth";
  }
  else {
    axios.get(api_url + "/v1/registration/attendee",
      {
        'headers': { 'Authorization': token }
      }
    )
    .then(response => {
      console.log("Success");
      let attendeeData = response.data.data;
      console.log(attendeeData.status);
      if (attendeeData.status === 'Accepted') {
          return resolve("Accepted");
      } else {
          return reject("Pending");
      }
    })
    .catch(error => {
      console.log("Error");
      console.log(error);
      return reject("Error getting attendee data"); // rejected
    });
  }
});

const sendRsvp = (rsvp, method) => new Promise((resolve, reject) => {
  const token = sessionStorage.getItem("Authorization");
  axios({
    url: api_url + '/v1/rsvp/attendee',
    method: method,
    headers: {
      'Authorization': token,
    },
    data: {
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
