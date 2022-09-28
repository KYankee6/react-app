import logo from './logo.svg';
import './App.css';
import LifeCycleEx from './LifeCycleEx.js';

function App() {
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
        <LifeCycleEx prop_value="FromApp"/>
      </header>
    </div>
  );
}

export default App;
