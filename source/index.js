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
import Prersvp from './components/rsvp/prersvp'
import WaitList from './components/rsvp/waitlist'
import Schedule from './components/schedule/schedule'
import Maps from './components/maps/maps'
import Prizes from './components/prizes/prizes'
import Travel from './components/travel/travel'
import Mentorship from './components/mentorship/mentorship'
import Dashboard from './components/dashboard/dashboard'
import DashboardLarge from './components/dashboard/dashboardLarge'
import 'babel-polyfill';

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
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/auth" component={Auth}/>
      <Route exact path="/start" component={RegisterStart}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/auth/mobile" component={MobileAuth}/>
      <Route exact path="/rsvp" component={Prersvp}/>
      <Route exact path="/rsvp/congratulations" component={Rsvp}/>
      <Route exact path="/rsvp/yes" component={RsvpYes}/>
      <Route exact path="/rsvp/no" component={RsvpNo}/>
      <Route exact path="/rsvp/waitlist" component={WaitList}/>
      <Route exact path="/schedule" component={Schedule}/>
      <Route exact path="/maps" component={Maps}/>
      <Route exact path="/prizes" component={Prizes}/>
      <Route exact path="/travel" component={Travel}/>
      <Route exact path="/mentors" component={Mentorship}/>
      <Route exact path="/dashboard" component={Dashboard}/>
      <Route exact path="/dashboard/large" component={DashboardLarge}/>
      <Route component={Error}/>
    </Switch>
  </Router>,
  document.getElementById('app')
);
