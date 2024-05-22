import logo from './logo.svg';
import './App.css';
import { MyComponent } from './components/MyComponent';
import { MySecondComponent } from './components/MySecondComponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Estructura inicial del proyecto y limpia.
        </p>
        <MySecondComponent />
        <MyComponent />   
      </header>
    </div>
  );
}

export default App;
