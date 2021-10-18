import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { useFeatureFlags, useDispatchFeatureFlag } from './context/featureFlags'

const SiblingComponent = () => {
  const dispatchFeatureFlag = useDispatchFeatureFlag()
  useEffect(() => {
    setTimeout(() => {
      dispatchFeatureFlag({
        feature: 'is_logo_enabled', value: true
      })
    }, 1000)

  })
  return <div>Little ole me</div>
}

const Logo = () => {
  const flags = useFeatureFlags() 
  const { is_logo_enabled } = flags
  return is_logo_enabled ? (<img src={logo} className="App-logo" alt="logo" />): null
}

function App() {
  return (
    <div className="App">
      <SiblingComponent />
      <header className="App-header">
        <Logo />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
