import React, { useState } from 'react';
import './../Style/Main.css'

import { Navbar } from '../Components/Navbar';

const Main = () => {

  return (
    <div className="main">
        <Navbar />
        <div className="comps">
            <p>{'<HarshitGakhar />'}</p>
            <p>Software Engineer</p>
        </div>
    </div>
  )
}

export default Main;