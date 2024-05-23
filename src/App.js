import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { MyComponent } from './components/MyComponent';
import { MySecondComponent } from './components/MySecondComponent';
import { MyThirdComponent } from './components/MyThirdComponent';
import { Child } from './components/Child';

function App() {

  const [name, setName] = useState('Diego')
  const [message, setMessage] = useState('');
  
  const addMessage = (message) => { 
    console.log(message)
    setMessage(message)
  }

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
        <Child name={name} setName={setName}  addMessage={addMessage}/>
        <p>Mensaje desde el hijo: {message}</p>
        <MyComponent />   
        <MySecondComponent />
        <MyThirdComponent
          name={"Diego"}
          lastName={"Ramirez"}
          medicalRecord={medicalRecord} />
      </header>
    </div>
  );
}

export default App;
