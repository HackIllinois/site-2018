import React, { Component } from 'react';
import { fromPromise } from 'mobx-utils';
import querystring from 'query-string';

import axios from 'axios';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {redirect: "register"};
    }

    componentDidMount() {
        const code = querystring.parse(this.props.location.search)['code'];
        const token = fromPromise(axios.get('https://api.hackillinois.org/v1/auth/github?code=' + code))
        .then(
            (token) => {
              sessionStorage.setItem("Authorization", 'Bearer ' + token.data.data.auth);
            },
            (reject) => {
              console.error('your authentication request failed, please try again');
              sessionStorage.removeItem('Authorization');
              this.setState({
                redirect: ""
              });
            }
        )
    }

    render() {
        let divContent = "1; url=/" + this.state.redirect;
        return (
            <div className="container">
                <meta httpEquiv="refresh" content={divContent}/>
            </div>
        )
    }
}

export default Auth
