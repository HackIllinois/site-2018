import axios from 'axios';

const getGithubData = () => new Promise((resolve, reject) => {
  const token = sessionStorage.getItem("Authorization");
  if (token == null) {
    this.props.history.push("/start");
  }
  else {
    axios.get("http://api.test.hackillinois.org/v1/user",
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
      return reject("Getting github data Error"); // rejected
    });
  }
});

const getAttendeeData = () => new Promise((resolve, reject) => {
  const token = sessionStorage.getItem("Authorization");
  axios.get("http://api.test.hackillinois.org/v1/registration/attendee",
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
    return reject("Getting attendee data Error"); // rejected
  });
});

const uploadResumeFile = (method, data, id, fileType) => new Promise((resolve, reject) => {
  const token = sessionStorage.getItem("Authorization");
  axios({
    url: 'http://api.test.hackillinois.org/v1/upload/resume/'+id,
    method: method,
    data: data,
    headers: {
      'Authorization': token,
      'Content-Type': fileType,
    },
  })
  .then(response => {
    // console.log(response.data.data);
    return resolve(response.data.data);
  })
  .catch(error => {
    // console.log(error);
    return reject("Uploading resume file Error"); // rejected
  });
})

const uploadAttendeeData = (method, data) => new Promise((resolve, reject) => {
  const token = sessionStorage.getItem("Authorization");
  axios({
    url: 'http://api.test.hackillinois.org/v1/registration/attendee',
    method: method,
    data: data,
    headers: { 'Authorization': token }
  })
  .then(response => {
    // console.log(response.data.data);
    return resolve(response.data.data);
  })
  .catch(error => {
    // console.log(error);
    return reject("Uploading attendee data Error"); // rejected
  });
});

export {uploadAttendeeData, uploadResumeFile, getGithubData, getAttendeeData}
