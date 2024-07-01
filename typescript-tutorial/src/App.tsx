import React, { useState } from 'react';
import InputField from './components/inputField';
import './App.css';

const App : React.FC = () => {
  const [todo, setstate] = useState("")


  return (
    <div className="App">
     <span className="heading"> Task App</span>
     <InputField />
    </div>
  );
}

export default App;
