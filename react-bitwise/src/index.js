import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import { UserMovieList } from './components/UserMovieList';
import { Navigation } from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navigation/>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route exact path='/user-list' component={UserMovieList}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);