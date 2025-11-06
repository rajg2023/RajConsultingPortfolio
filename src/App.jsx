import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Legal from './pages/Legal';

// For GitHub Pages, we'll use a hash router to avoid 404s
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/legal">
        <Route index element={<Legal />} />
        <Route path="privacy" element={<Legal defaultSection="privacy" />} />
        <Route path="terms" element={<Legal defaultSection="terms" />} />
        <Route path="data" element={<Legal defaultSection="data" />} />
        <Route path="ai" element={<Legal defaultSection="ai" />} />
        <Route path="security" element={<Legal defaultSection="security" />} />
        <Route path="thirdParty" element={<Legal defaultSection="thirdParty" />} />
      </Route>
      <Route path="/RajConsultingPortfolio" element={<Navigate to="/" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
