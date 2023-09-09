import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CalendarView from './components/CalendarView'; 
import StatsView from './components/StatsView'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CalendarView />} /> 
          <Route path="/calendar" element={<CalendarView />} /> 
          <Route path="/stats" element={<StatsView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
