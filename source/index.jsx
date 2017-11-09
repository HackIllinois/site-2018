import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

// Components
import Home from './components/home/home';

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
            <Route exact path="/" component={Home}/>
        </div>
    </Router>,
    document.getElementById('app')
);
