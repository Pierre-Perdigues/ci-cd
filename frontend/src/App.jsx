import React from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import PrenomPage from './components/PrenomPage';
import CitationPage from './components/CitationPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/prenom" element={<PrenomPage />} />
        <Route path="/citation" element={<CitationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
