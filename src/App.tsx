import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <HomePage />
    </Router>
  );
}

export default App;
