import logo from './logo.svg';
import './App.css';

function App(): React.ReactElement {
  const a = 1;
  const b = 2;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {a}
          {b}
          React App living in a Rush monorepo
        </a>
      </header>
    </div>
  );
}

export default App;
