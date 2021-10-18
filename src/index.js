import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FeatureFlagStore } from './context/featureFlags'

const featureFlags = {
  is_logo_enabled: false,
  is_something_else_enabled: false
}

ReactDOM.render(
  <React.StrictMode>
    <FeatureFlagStore initialState={featureFlags}>
      <App />
    </FeatureFlagStore>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
