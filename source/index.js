import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

// Components
import Home from './components/home/home';
import Auth from './components/auth/auth';
import Error from './components/error/error';
import Register from './components/register/register';
import MobileAuth from './components/auth/mobile';
import RegisterStart from './components/registerStart/registerStart';

require('semantic-ui-css/semantic.min.css');
require('normalize.css');
require('./styles/main.scss');

// this is like a component, unless it gets included somewhere as <App />, or routed as {App} from (e.g.) './app', it will not appear
class App extends React.Component {
  render () {
    return(
      <div className="main">Hello World</div>
    )
  }
}

render(
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/auth" component={Auth}/>
        <Route exact path="/start" component={RegisterStart}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/auth/mobile" component={MobileAuth}/>
        <Route component={Error}/>
      </Switch>
    </div>
  </Router>,
  document.getElementById('app')
);
