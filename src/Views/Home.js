import React, { Component, useEffect, useState } from 'react';
import { connect } from 'react-redux'
import Activity from '../Components/Activity';
import Navbar from '../Components/Navbar';
import water from './../Asset/drinking-water.png';
import walk from './../Asset/walk.png';
import excercise from './../Asset/workout.png'

const Home = (props) => {
  const [activities, handleActivity] = useState([
    {
      name: 'Drink Water',
      avatar: water
    },
    {
      name: 'Walking | Running',
      avatar: walk
    },
    {
      name: 'Excercise',
      avatar: excercise
    },
    {
      name: 'Excercise',
      avatar: excercise
    },
  ])
  const [onlyShow, handleShow] = useState(null)
  const [showActivity, handleshowActivity] = useState(false)

  const check = (val) => {
    console.log('inside function')
    console.log(val)
    let value = showActivity;
    handleshowActivity(value => !value)
    if (value === true) {
      handleShow(val)
    }
    else {
      handleShow(null)
    }
  }
  return (
    <React.Fragment>
      <Navbar />
      <div className="container ">
        <div className=" row justify-content-between border col-xl-12 col-lg-12 col-md-12 col-sm-12">
          {activities.map(activity => {
            if (onlyShow != null && showActivity == true) {
              alert('here')
              return <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-6  justify-content-center d-flex mt-4">
                <button className=" btn btn-dark col-9 border rounded " onClick={() => check()}>
                  <img src={onlyShow.avatar} className="col-12 rounded"></img>
                  <text className="mt-2">{onlyShow.name}</text>
                </button>
              </div>
            }
            else {
              return <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-6  justify-content-center d-flex mt-4">
                <button className=" btn btn-dark col-9 border rounded " onClick={() => check(activity)}>
                  <img src={activity.avatar} className="col-12 rounded"></img>
                  <text className="mt-2">{activity.name}</text>
                </button>
              </div>
            }
          })}
        </div>
        <Activity showActivity={showActivity} />
      </div>
    </React.Fragment>
  );

}

const mapStateToProps = state => {
  return {
    logs: state.ExpenseLog
  }
}

const mapDisptachToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDisptachToProps)(Home);

