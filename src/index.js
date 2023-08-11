import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { GlobalContext } from 'Context/stateContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalContext>
    <App />
  </GlobalContext>
);
