import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// Components
import Home from './components/home/home';
import Auth from './components/auth/auth'

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

const store = createStore(todoApp)
render(
  <Provider store={store}>
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/auth" component={Auth}/>
        </div>
    </Router>
  </Provider>,
    document.getElementById('app')
);
