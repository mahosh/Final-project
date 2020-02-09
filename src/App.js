import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Week from './Week';
import NavBar from './NavBar';
import LoginState from './LoginState';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <LoginState/>      
      <Week/>
    </div>
  );
}

export default App;
