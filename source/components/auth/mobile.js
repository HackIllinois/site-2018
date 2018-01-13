import React, { Component } from 'react';
import { fromPromise } from 'mobx-utils';
import querystring from 'query-string';

import axios from 'axios';

const MOBILE_REDIRECT_BASEURL = "hackillinois://auth?token="

class Auth extends Component {

    constructor(props) {
      super(props);
      this.state = {token: ""};
    }

    componentDidMount() {
      const code = querystring.parse(this.props.location.search)['code'];
      const token = fromPromise(axios.get('https://api.hackillinois.org/v1/auth/github?code=' + code))
      .then(
        (token) => {
          this.state.token = token;
        },
        (reject) => {
          this.state.token = "";
        }
      )
    }

    render() {
      let redirectURI = MOBILE_REDIRECT_BASEURL + this.state.token;
      let divContent = "1; url=" + redirectURI;

      return (
        <div className="container">
          <meta httpEquiv="refresh" content={divContent}/>
        </div>
      )
    }
}

export default Auth
