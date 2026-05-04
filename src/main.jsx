import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { inject } from '@vercel/analytics';
import App from './App';
import './index.css'
import { HelmetProvider } from 'react-helmet-async'

inject();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </Router>
);