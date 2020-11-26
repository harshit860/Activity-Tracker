import React, { Component } from 'react';
import { BrowserRouter as RouterMain, Link,Route } from 'react-router-dom'
import Main from '../Views/Main';

function Locator() {
  return (
    <RouterMain>
      <React.Fragment>
        <Link to="/"  ></Link>
      </React.Fragment>
      <React.Fragment>
        <Route path="/" exact component={Main} />
      </React.Fragment>
    </RouterMain>
  )
}
export default Locator;
