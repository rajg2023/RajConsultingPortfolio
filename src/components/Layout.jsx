// src/components/Layout.jsx
import React from 'react';
import Header from './Header/Header';
import Footer from './Footer';

// In Layout.jsx
const Layout = ({ children, hideNav = false, activeSection, setActiveSection }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {!hideNav && <Header activeSection={activeSection} setActiveSection={setActiveSection} />}
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;