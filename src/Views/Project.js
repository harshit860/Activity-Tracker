import React, { useState } from 'react'
import { Navbar } from '../Components/Navbar'
import './../Style/Main.css';

export default function Project() {
  const [projectList,handleList] = useState([
    {
      name:'Fitness Tracker',
      image: 'https://harshit860.github.io/project1.png'
    },
    {
      name:'Bhagavat Gita',
      image:'https://harshit860.github.io/BHAGAVAT%20GITA.png'
    },
    {
      name:'Food quick',
      image:'https://harshit860.github.io/Foodquik.png'
    },
    {
      name:'Fitness Tracker'
    },
])
  return (
    <div className="skill">
      <Navbar />
      <div className="projects">
        {projectList.map(project => {
          return <div className="project">
              <h3 style={{textAlign: 'center'}}>{project.name}</h3>
              <img width="90%" height="60%" src={project.image} ></img>
              
            </div>
        })}
      </div>
    </div>
  )
}
