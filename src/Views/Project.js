import React, { useState } from 'react'
import { Navbar } from '../Components/Navbar'
import './../Style/Main.css';
import riwaaz from './../Asset/riwaaz1.png'
import snake from './../Asset/snake.png'
import design from './../Asset/design.png'

export default function Project() {
  const [projectList,handleList] = useState([
    {
      name:'Fitness Tracker',
      image: 'https://harshit860.github.io/project1.png',
      project:'https://fitnesstracker-fitme.netlify.com/',
      source:'https://github.com/arunabhthakur94/Fitness-Tracker',
      info:'This is a fitness regime tracker made with React and Firebase. It was a team project.'
    },
    {
      name:'Bhagavat Gita',
      image:'https://harshit860.github.io/BHAGAVAT%20GITA.png',
      project:'https://harshit860.github.io/masai-week-5/index.html',
      source:'https://github.com/harshit860/masai-week-5',
      info:'This is a fitness regime tracker made with React and Firebase. It was a team project.'
    },
    {
      name:'Food quick',
      image:'https://harshit860.github.io/Foodquik.png',
      project:'https://foodquik.netlify.app/',
      source:'https://github.com/harshit860/Food-Ordering-Application',
      info:'This is a fitness regime tracker made with React and Firebase. It was a team project.'
    },
    {
      name:'Riwaaz Business Portfolio',
      image:riwaaz,
      project:'https://riwaaz.netlify.app/',
      source:'',
      info:'This is a fitness regime tracker made with React and Firebase. It was a team project.'
    },
    {
      name:'Snake Game P5.js',
      image:snake,
      source:'https://harshit860.github.io/Snake-P5JS',
      info:'Snake Game',
      project:'https://github.com/harshit860/Snake-P5JS/'
    },
    {
      name:'Design Hub Website',
      project:'https://harshit860.github.io/DESIGNHUB/',
      image:design,
      info:'Simple Design Website made using HTML CSS JS',
      source:'https://github.com/harshit860/DESIGNHUB'
    }
    
    
])
  return (
    <div className="skill">
      <Navbar />
      <div className="projects">
        {projectList.map(project => {
          return <div className="project p-4">
              <h1 style={{textAlign: 'center' ,fontFamily: 'Franklin Gothic Medium'}}>{project.name}</h1>
              <img className="border rounded" height="50%" width="100%"  src={project.image} ></img>
              <p style={{fontSize:20 , textAlign:"center"}}>{project.info}</p>
              <div className="">
                <a className="btn btn-warning rounded" target="_blank" href={project.project} >Project</a>
                 {project.source ? <a className="btn btn-warning rounded" target="_blank" href={project.source} >Source</a> : ('')}
              </div>
              
            </div>
        })}
      </div>
    </div>
  )
}
