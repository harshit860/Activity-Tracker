import React, { Component, useEffect } from 'react';
import { HashRouter, Link,Route } from 'react-router-dom'
import Contact from '../Views/Contact';
import Main from '../Views/Main';
import Project from '../Views/Project';
import Skills from '../Views/Skills';

function Locator() {

  useEffect(()=>{
  })
  return (
    <HashRouter>
        <Link to="/"  ></Link>
        <Route path="/" exact component={Main} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/project" exact component={Project} />
        <Route path="/skill" exact render={()=><Skills />} />
    </HashRouter>
  )
}
export default Locator;
