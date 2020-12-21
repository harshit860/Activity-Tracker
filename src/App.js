import React from 'react';
import logo from './logo.svg';
import './App.css';
import Locator from './Components/Router';



function App(props) {
    console.log(props)
  return (
    <React.Fragment>
      <Locator />
    </React.Fragment>
  );
}

export default App;
