import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Remove the initial-paint splash once React has mounted.
// Two rAFs ensure the first frame is committed before we trigger the fade.
const loader = document.getElementById('initial-loader');
if (loader) {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      loader.classList.add('loaded');
      setTimeout(() => loader.remove(), 450);
    });
  });
}
