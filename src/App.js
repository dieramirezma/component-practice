import logo from './logo.svg';
import './App.css';
import { MyComponent } from './components/MyComponent';
import { MySecondComponent } from './components/MySecondComponent';
import { MyThirdComponent } from './components/MyThirdComponent';


function App() {

  const medicalRecord = {
    height: 160,
    weight: 70,
    bloodType: "A+",
    allergies: ["Pollen", "Dust", "Peanuts"]
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Estructura inicial del proyecto y limpia.
        </p>
        <MyComponent />   
        <MySecondComponent />
        <MyThirdComponent name={"Diego"} lastName={"Ramirez"} medicalRecord = {medicalRecord} />
      </header>
    </div>
  );
}

export default App;
