import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import ResetStyle from './style/ResetStyle.ts';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ResetStyle />
    <App />
  </React.StrictMode>,
);
