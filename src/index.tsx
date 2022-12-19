import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import store, { StoreCtx } from './store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <StoreCtx.Provider value={store}>
      <BrowserRouter>
        <div className="App">
          <App />
        </div>
      </BrowserRouter>
    </StoreCtx.Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
