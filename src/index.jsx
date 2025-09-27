import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  // Import Tailwind CSS
import { AuthProvider } from './contexts/AuthContext';

 /* ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);  */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> {/* ✅ Wrap your entire app */}
      <App />
    </AuthProvider>
  </React.StrictMode>
);