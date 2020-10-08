import React, { Component } from 'react';
import { BrowserRouter as RouterMain, Link,Route } from 'react-router-dom'
import Home from '../Views/Home';

function Locator() {
  return (
    <RouterMain>
      <React.Fragment>
        <Link to="/"  ></Link>
      </React.Fragment>
      <React.Fragment>
        <Route path="/" exact component={Home} />
      </React.Fragment>
    </RouterMain>
  )
}
export default Locator;
