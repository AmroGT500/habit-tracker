import React from 'react';
import { BrowserRouter as Router, Outlet } from 'react-router-dom';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Router>
  );
}

export default App;
