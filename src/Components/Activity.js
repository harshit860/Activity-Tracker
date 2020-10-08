import React, { Component, useEffect, useState } from 'react';
import { connect } from 'react-redux'
import Navbar from '../Components/Navbar';

const Activity = (props) => {
  console.log(props)
  return (
    <React.Fragment>
      <div className="container ">
        {props.showActivity ? (<div>Showing</div>) : (<div>Not showing </div>)}
      </div>
    </React.Fragment>
  );
}

export default Activity;

