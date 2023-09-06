// import logo from './logo.svg';
import '../styling/App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './views/Home';
import Calendar from './views/Calendar';
import Stats from './views/Stats';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/stats" component={Stats} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
