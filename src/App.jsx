// src/App.jsx
import React, { useState, Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import LoadingSpinner from './components/common/LoadingSpinner';
import ErrorBoundary from './components/common/ErrorBoundary';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const Legal = lazy(() => import('./pages/Legal'));
const TestError = lazy(() => import('./utils/test/TestError'));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
    <LoadingSpinner size="lg" />
  </div>
);

// In App.jsx
const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route 
              path="/" 
              element={
                <Layout 
                  activeSection={activeSection} 
                  setActiveSection={setActiveSection}
                >
                  <HomePage 
                    activeSection={activeSection} 
                    setActiveSection={setActiveSection} 
                  />
                </Layout>
              } 
            />
            <Route 
              path="/legal" 
              element={<Layout hideNav><Legal /></Layout>} 
            />
            <Route 
              path="/legal/:section" 
              element={<Layout hideNav><Legal /></Layout>} 
            />
            <Route path="/test-error" element={<TestError />} />
            <Route path="/RajConsultingPortfolio" element={<Navigate to="/" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/contact" element={<Navigate to="/" replace />} />
            
          </Routes>
        </Suspense>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;