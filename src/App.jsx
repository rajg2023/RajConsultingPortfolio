import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Legal from './pages/Legal';

// Get the base path from the environment or use the GitHub Pages path
const BASE_PATH = import.meta.env.BASE_URL || '/';

// A wrapper for routes to handle the base path
const AppRoute = ({ path, element }) => (
  <Route 
    path={`${path === '/' ? '' : path}`} 
    element={element} 
  />
);

// Handle redirects for GitHub Pages
const RedirectToBase = () => {
  const location = useLocation();
  // If we're at the root, render the home page
  if (location.pathname === BASE_PATH || location.pathname === `${BASE_PATH}/`) {
    return <HomePage />;
  }
  // Otherwise, redirect to the base path
  return <Navigate to={BASE_PATH} replace />;
};

const App = () => {
  return (
    <Routes>
      <Route path={BASE_PATH} element={<HomePage />} />
      <Route path={`${BASE_PATH}legal`} element={<Legal />} />
      {/* Catch-all route for GitHub Pages */}
      <Route path="*" element={<RedirectToBase />} />
    </Routes>
  );
};

export default App;
