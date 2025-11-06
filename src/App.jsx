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
      <Route path="/privacy-policy" element={<Legal defaultSection="privacy" />} />
      <Route path="/terms-of-service" element={<Legal defaultSection="terms" />} />
      <Route path="/data-collection" element={<Legal defaultSection="data" />} />
      <Route path="/ai-disclosure" element={<Legal defaultSection="ai" />} />
      <Route path="/data-security" element={<Legal defaultSection="security" />} />
      <Route path="/third-party-services" element={<Legal defaultSection="thirdParty" />} />
    </Routes>
  );
};

export default App;
