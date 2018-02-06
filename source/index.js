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
import RsvpYes from './components/rsvp/rsvpYes'
import RsvpNo from './components/rsvp/rsvpNo'
import Rsvp from './components/rsvp/rsvp'

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
        <Route exact path="/register" component={Register}/>
        <Route exact path="/auth/mobile" component={MobileAuth}/>
        <Route exact path="/rsvp" component={Rsvp}/>
        <Route exact path="/rsvpyes" component={RsvpYes}/>
        <Route exact path="/rsvpno" component={RsvpNo}/>
        <Route component={Error}/>
      </Switch>
    </div>
  </Router>,
  document.getElementById('app')
);
