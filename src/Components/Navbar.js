import React, { useEffect, useState } from 'react'
import { Link, Redirect , useHistory} from 'react-router-dom';
import './../Style/Main.css'

export const Navbar = (props) => {
    const [home,useHome] = useState(false);
    const [skills,useSkills] = useState(false);
    const [projects,useProjects] = useState(false);
    const [contact,useContact] = useState(false);

    const [homeGlow,useHomeGlow] = useState(false)
    const [skillGlow,useSkillGlow] = useState(false)
    const [projectsGlow,useProjectsGlow] = useState(false)
    const [contactsGlow,useContactsGlow] = useState(false)

    let history = useHistory();
  const routeTO = (path) =>{
    history.push(path)
  }

  useEffect(() => {
    let path = window.location.pathname || ''
    switch(path) {
      case '/skill':
        break;
      case '/project':
        break;
      case '/contact':
        break;
    }
  },[])
  return (
    <React.Fragment>
      <div className="nav">
        <div className="imageS" onClick={()=>routeTO('/')} onMouseEnter={(e)=>console.log(e.target.textContent)}>
          {home ? ('') : ('Home')}
        </div>
        <div className="imageS" onClick={()=>routeTO('/skill')}>
          {skills ? ('') : ('Skills')}
        </div>
        <div className="imageS" onClick={()=>routeTO('/project')}>
          {projects ? ('') : ('Projects')}
        </div>
      </div>
      <div className="nav2">
        <div className="imageS" onClick={()=>routeTO('/')} onMouseEnter={(e)=>console.log(e.target.textContent)} style={{ marginLeft: '-40px'}}>
          {home ? ('') : ('Home')}
        </div>
        <div className="imageS" onClick={()=>routeTO('/skill')}>
          {skills ? ('') : ('Skills')}
        </div>
        <div className="imageS" onClick={()=>routeTO('/project')}>
          {projects ? ('') : ('Projects')}
        </div>
      </div>
    </React.Fragment>
  )
}