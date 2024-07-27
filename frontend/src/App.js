//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import HomeEs from './components/HomeEs';
import ENPractice from './components/Practice'
import ESPractice from './components/PracticeEs'
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/en" element={<Home />} />
        <Route path="/es" element={<HomeEs />} />
        <Route path="/en/practice" element={<ENPractice />} />
        <Route path="/es/practice" element={<ESPractice />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
