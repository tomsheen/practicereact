import React from 'react';
import Navbar from './Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes path='/' exact />
      </Router>
    </>
  );
}

export default App;
