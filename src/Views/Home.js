import React, { Component, useEffect, useState } from 'react';
import { connect } from 'react-redux'
import Navbar from '../Components/Navbar';
import dog from './../Asset/dog.png';
import dogbone from './../Asset/dog-bone.png';
import doghouse from './../Asset/dog-house.png';
import './../home.css'


const Home = (props) => {
  const [path, handlePath] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
  const [dogLocation, handledog] = useState(1)
  const display = path.map((val, index) => {

    if (dogLocation === val ) {
      if(path.length  === dogLocation)
      {
        alert('winnder')
        
      }
      return <div
        style={{
          height: '6%',
          width: '8%',
          margin: '50px'
        }}
      >
        <img onClick={() => {
          
          handledog(prev => prev + 1)
        }} style={{}} src={dog} width="100%" height="100%" />
      </div>
    }
    //////////////// Food
    if(index != path.length -1)
    {
    return <div
    style={{
      height: '6%',
      width: '5%',
      margin: '50px'
    }}
  >
    <img id="food" src={dogbone} width="100%" height="100%" />
  </div>
    }
  if(index == path.length -1)
  {
    return <div
    style={{
      height: '6%',
      width: '5%',
      margin: '50px'
    }}
  >
    <img id="food" src={doghouse} width="100%" height="100%" />
  </div>
  }
  })


  return (
    <React.Fragment>
      <Navbar />
      <div
      onKeyUp={(e)=>console.log(e)}
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          // backgroundColor:'#9adb07'
        }}
      >
        {display}
        
      </div>
    </React.Fragment>
  );

}

const mapStateToProps = state => {
  return {

  }
}

const mapDisptachToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDisptachToProps)(Home);

