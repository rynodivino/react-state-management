import logo from './logo.svg';
import './App.css';

import { useStore } from './stores/featureFlags'

const SiblingComponent = () => {
  const dispatchFeatureFlag = useStore(state => state.setFeatureFlag)
  dispatchFeatureFlag('is_logo_enabled', false)
  useEffect(() => {
    setTimeout(() => {
      dispatchFeatureFlag('is_logo_enabled', true)
    }, 1000)

  })
  console.log('render lil ole me')
  return <div>Little ole me</div>
}

const Logo = () => {
  const flags = useStore(state => state) 
  const { is_logo_enabled } = flags
  console.log('render logo')
  return is_logo_enabled ? (<img src={logo} className="App-logo" alt="logo" />): null
}

function App() {
  console.log('render app')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
