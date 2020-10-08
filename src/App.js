import React from 'react';
import logo from './logo.svg';
import './App.css';
import Locator from './Components/Router';
import data from './Redux/reducer'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

const store = createStore(data)

function App() {
  return (
    <>
      <Provider  store = {store}>
        <Locator />
     </Provider>
    </>
  );
}

export default App;
