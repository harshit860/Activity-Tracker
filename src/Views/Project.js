import React, { useState } from 'react'
import { Navbar } from '../Components/Navbar'
import './../Style/Main.css';
import riwaaz from './../Asset/riwaaz1.png'

export default function Project() {
  const [projectList,handleList] = useState([
    {
      name:'Fitness Tracker',
      image: 'https://harshit860.github.io/project1.png',
      project:'https://fitnesstracker-fitme.netlify.com/',
      source:'https://github.com/arunabhthakur94/Fitness-Tracker'
    },
    {
      name:'Bhagavat Gita',
      image:'https://harshit860.github.io/BHAGAVAT%20GITA.png',
      project:'https://harshit860.github.io/masai-week-5/index.html',
      source:'https://github.com/harshit860/masai-week-5'
    },
    {
      name:'Food quick',
      image:'https://harshit860.github.io/Foodquik.png',
      project:'https://foodquik.netlify.app/',
      source:'https://github.com/harshit860/Food-Ordering-Application'
    },
    {
      name:'Riwaaz Business Portfolio',
      image:riwaaz,
      project:'https://riwaaz.netlify.app/',
      source:''
    },
])
  return (
    <div className="skill">
      <Navbar />
      <div className="projects">
        {projectList.map(project => {
          return <div className="project ">
              <h2 style={{textAlign: 'center'}}>{project.name}</h2>
              <img className="border rounded" width="90%" height="60%" src={project.image} ></img>
              <p style={{fontSize:20}}>hello</p>
              <div className="p-3 row d-flex w-100 justify-content-around ">
                <a className="btn btn-warning rounded" target="_blank" href={project.project} >Project</a>
                 {project.source ? <a className="btn btn-warning rounded" target="_blank" href={project.source} >Source</a> : ('')}
              </div>
            </div>
        })}
      </div>
    </div>
  )
}
