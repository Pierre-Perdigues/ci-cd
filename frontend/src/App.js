import React from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import PrenomPage from './components/PrenomPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/prenom" element={<PrenomPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
