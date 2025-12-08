import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { inject } from '@vercel/analytics';
import App from './App';
import './index.css'

inject();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router basename="/react-portfolio">
    <App />
  </Router>
);

{/*<Router basename="/react-portfolio">*/}