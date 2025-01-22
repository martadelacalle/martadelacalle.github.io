import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import reportWebVitals from './reportWebVitals';
import LenguageProvider from './utils/LenguageProvider'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LenguageProvider>
      <BrowserRouter> {/* Envuelve App con BrowserRouter */}
        <App />
      </BrowserRouter>
    </LenguageProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
