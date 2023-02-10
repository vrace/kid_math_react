import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import KidMathApp from './KidMathApp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <KidMathApp />
  </React.StrictMode>
);
