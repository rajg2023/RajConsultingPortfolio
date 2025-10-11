import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Legal from './pages/Legal';

// For GitHub Pages, we'll use a hash router to avoid 404s
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/legal" element={<Legal />} />
      <Route path="/RajConsultingPortfolio" element={<Navigate to="/" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
