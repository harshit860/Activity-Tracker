import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Locator from './Components/Router';
import fire from './fire';

function App(props) {

  // useEffect(() => {
  //   console.log("system information")
  //   // fire.database().ref('count').push("test")
  //   let data1 = fire.database().ref('count').on("value",function(data) {
  //     console.log(data)
  //   })
  //   console.log(data1)
  // }, [])
  return (
    <React.Fragment>
      <Locator />
    </React.Fragment>
  );
}

export default App;
