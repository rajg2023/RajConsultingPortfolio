import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  // Import Tailwind CSS
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter } from 'react-router-dom';

 /* ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);  */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ This is the ONLY BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);