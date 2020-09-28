import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import HomePage from './views/HomePage/HomePage'
import Dashboard from './views/Dashboard/Dashboard'

import "./css/Dashboard.css"

function App() {
  return (
    <Router>
      <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/dashboard" component={Dashboard}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
