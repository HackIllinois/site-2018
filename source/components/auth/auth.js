import React, { Component } from 'react'
import { fromPromise } from 'mobx-utils'
import querystring from 'query-string'

import axios from 'axios'

class Auth extends Component {
    constructor(props) {
      super(props)
    }

    componentDidMount() {
      const code = querystring.parse(this.props.location.search)['code']
      const token = fromPromise(axios.get('http://ec2-107-20-14-41.compute-1.amazonaws.com/v1/auth/github?code=' + code))
      .then(
        (token) => {
          sessionStorage.setItem("Authorization", 'Bearer ' + token.data.data.auth);
        },
        (reject) => {
          console.error('your authentication request failed, please try again');
          sessionStorage.removeItem('Authorization');
        }
      )
    }

    render() {
      return (
        <div className="container">
          <meta httpEquiv="refresh" content="0; url=/"/>
        </div>
      )
    }
}

export default Auth
