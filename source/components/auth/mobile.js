import React, { Component } from 'react';
import { fromPromise } from 'mobx-utils';
import querystring from 'query-string';

import axios from 'axios';

import {api_url} from '../../../config';


const MOBILE_REDIRECT_BASEURL = "hackillinois://auth?token="

class Auth extends Component {

    constructor(props) {
      super(props);
      this.state = {token: ""};
    }

    componentDidMount() {
      const code = querystring.parse(this.props.location.search)['code'];
      const token = fromPromise(axios.get(api_url + '/v1/auth/github?code=' + code))
      .then(
        (token) => {
          this.setState({
            token: token.data.data.auth
          });
        },
        (reject) => {
          this.setState({
            token: ""
          });
        }
      )
    }

    render() {
      let redirectURI = MOBILE_REDIRECT_BASEURL + this.state.token;
      let divContent = "0; url=" + redirectURI;

      return (
        <div className="container">
          <meta httpEquiv="refresh" content={divContent}/>
        </div>
      )
    }
}

export default Auth
