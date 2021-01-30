import React, { useState } from 'react'
import { Navbar } from '../Components/Navbar'
import './../Style/Main.css';
import riwaaz from './../Asset/riwaaz1.png'
import snake from './../Asset/snake.png'
import design from './../Asset/design.png'
import bg from './../Asset/bg.png'
import food from './../Asset/food.png'
import fit from './../Asset/fitt.png'

export default function Project() {
  const [projectList, handleList] = useState([

    {
      name: 'Bhagavat Gita',
      image: bg,
      project: 'https://harshit860.github.io/masai-week-5/index.html',
      source: 'https://github.com/harshit860/masai-week-5',
      info: 'This is a Vanilla JS webapp built using a open source Bhagavat Gita API'
    },
    {
      name: 'Food quick',
      image: food,
      project: 'https://foodquik.netlify.app/',
      source: 'https://github.com/harshit860/Food-Ordering-Application',
      info: 'This is a Food restraunt with dishes website prototype built using React'
    },
    {
      name: 'Riwaaz Business Portfolio',
      image: riwaaz,
      project: 'https://riwaaz.netlify.app/',
      source: '',
      info: 'This is a Article Display Website for a business owner. Built using React + Firebase'
    },
    {
      name: 'Snake Game P5.js',
      image: snake,
      source: 'https://harshit860.github.io/Snake-P5JS',
      info: 'Basic snake game built using P5.JS',
      project: 'https://github.com/harshit860/Snake-P5JS/'
    },
    {
      name: 'Fitness Tracker',
      image: fit,
      project: 'https://fitnesstracker-fitme.netlify.com/',
      source: 'https://github.com/arunabhthakur94/Fitness-Tracker',
      info: 'This is a fitness regime tracker made with React and Firebase. It was a team project.'
    },
    {
      name: 'Design Hub Website',
      project: 'https://harshit860.github.io/DESIGNHUB/',
      image: design,
      info: 'Simple Design Website made using HTML CSS JS',
      source: 'https://github.com/harshit860/DESIGNHUB'
    },
    {
      name: 'Twitter Replica',
      info: 'This is a replica of twitter(frontend + backend) made using react + python(flask)',
      source: 'https://github.com/harshit860/Twitter-Replica',
      image: 'https://camo.githubusercontent.com/b2d600f1d9fa8f2cd653f63754fc2e760bfab53f78ae455143058c1d77aa1483/68747470733a2f2f692e696d6775722e636f6d2f357a786b4c47752e706e67'
    }
  ])
  return (
    <React.Fragment>
      <p className="text-center text-center mt-4 p-2 display-4">Projects</p>
    <div className="container">
      <div className=" row justify-content-around p-2">
        {projectList.map((val, ind) => {
          return <><div className="col-xl-4 col-lg-4 rounded col-md-4 col-xs-6 mt-4  m-2 card bg-white shadow projectMain">
              <p className="text-center p-2 projectName " style={{fontSize:30,textJustify:"auto"}}>{val.name}</p>
              <img src={val.image} className="img-fluid p-2" />
              <p className="text-center align-center">{val.info}</p>
              {val.project ? <button onClick={()=>{
                window.open(val.project);
              }} className="btn border m-3 shadow-sm" >View Project</button> : '' }  
              {val.source ? <button onClick={()=>{
                window.open(val.source);
              }} className="btn border ml-3 mr-3 mb-3 shadow-sm ">Source</button> :'' }
              
                {/* {val.project ? <a type="button" className="btn border rounded shadow-sm " style={{textAnchor:"center"}} target="_blank" href={val.project} >Project</a> : ('')} */}
                 {/* {val.source ? <a className="btn border rounded shadow-sm" target="_blank" href={val.source} >Source</a> : ('')} */}
              
          </div>
          
          </>
        })}
      </div>
    </div>
    </React.Fragment>
  )
}
