import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <HomePage />
    </Router>
  );
}

export default App;
