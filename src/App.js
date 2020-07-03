import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import HomePage from './views/HomePage/HomePage'

function App() {
  return (
    <Router>
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
    </Router>
  );
}

export default App;
