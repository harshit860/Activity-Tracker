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
  const [projectList,handleList] = useState([

    {
      name:'Bhagavat Gita',
      image:bg,
      project:'https://harshit860.github.io/masai-week-5/index.html',
      source:'https://github.com/harshit860/masai-week-5',
      info:'This is a Vanilla JS webapp built using a open source Bhagavat Gita API'
    },
    {
      name:'Food quick',
      image:food,
      project:'https://foodquik.netlify.app/',
      source:'https://github.com/harshit860/Food-Ordering-Application',
      info:'This is a Food restraunt with dishes website prototype built using React'
    },
    {
      name:'Riwaaz Business Portfolio',
      image:riwaaz,
      project:'https://riwaaz.netlify.app/',
      source:'',
      info:'This is a Article Display Website for a business owner. Built using React + Firebase'
    },
    {
      name:'Snake Game P5.js',
      image:snake,
      source:'https://harshit860.github.io/Snake-P5JS',
      info:'Basic snake game built using P5.JS',
      project:'https://github.com/harshit860/Snake-P5JS/'
    },
    {
      name:'Fitness Tracker',
      image: fit,
      project:'https://fitnesstracker-fitme.netlify.com/',
      source:'https://github.com/arunabhthakur94/Fitness-Tracker',
      info:'This is a fitness regime tracker made with React and Firebase. It was a team project.'
    },
    {
      name:'Design Hub Website',
      project:'https://harshit860.github.io/DESIGNHUB/',
      image:design,
      info:'Simple Design Website made using HTML CSS JS',
      source:'https://github.com/harshit860/DESIGNHUB'
    },
    {
      name:'Twitter Replica',
      info:'This is a replica of twitter(frontend + backend) made using react + python(flask)',
      source:'https://github.com/harshit860/Twitter-Replica',
      image:'https://camo.githubusercontent.com/b2d600f1d9fa8f2cd653f63754fc2e760bfab53f78ae455143058c1d77aa1483/68747470733a2f2f692e696d6775722e636f6d2f357a786b4c47752e706e67'
    }
])
  return (
    <div className="skill">
      <Navbar />
      <div className="projects">
        {projectList.map(project => {
          return <div className="project" key={project.name} >
              <h1 style={{textAlign: 'center' ,fontFamily: 'Franklin Gothic Medium'}}>{project.name}</h1>
              <img className="border rounded" height="50%" width="100%"  src={project.image} ></img>
              <p style={{fontSize:20 , textAlign:"center"}}>{project.info}</p>
              <div className="d-flex justify-content-around w-100 p-2">
                {project.project ? <a className="btn btn-warning rounded shadow-lg" target="_blank" href={project.project} >Project</a> : ('')}
                 {project.source ? <a className="btn btn-warning rounded shadow-lg" target="_blank" href={project.source} >Source</a> : ('')}
              </div>
              
            </div>
        })}
      </div>
    </div>
  )
}
