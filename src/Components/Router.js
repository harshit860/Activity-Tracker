import React, { Component, useEffect } from 'react';
import { BrowserRouter as RouterMain, Link,Route } from 'react-router-dom'
import Contact from '../Views/Contact';
import Main from '../Views/Main';
import Project from '../Views/Project';
import Skills from '../Views/Skills';

function Locator() {

  useEffect(()=>{
  })
  return (
    <RouterMain>
      <React.Fragment>
        <Link to="/"  ></Link>
      </React.Fragment>
      <React.Fragment>
        <Route path="/" exact component={Main} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/project" exact component={Project} />
        <Route path="/skill" exact render={()=><Skills />} />
      </React.Fragment>
    </RouterMain>
  )
}
export default Locator;
