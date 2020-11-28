import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './../Style/Main.css'
import Books from './../Asset/001-documents.png'
import File from './../Asset/029-light bulb.png'
import Home from './../Asset/005-id card.png'

export const Navbar = () => {
    const [home,useHome] = useState(false);
      const [skills,useSkills] = useState(false);
      const [projects,useProjects] = useState(false);
      const [contact,useContact] = useState(false);


  return (
      <div className="nav">
                <div className="imageS" style={{marginTop:100}} onMouseEnter={(e)=>console.log(e.target.textContent)}>
                  {home ? ('') : ('Home')}
                </div>
                <div className="imageS">
                  {skills ? ('') : ('Skills')}
                </div>
                <div className="imageS">
                  {projects ? ('') : ('Projects')}
                </div>
                <div className="imageS">
                  {contact ? ('') : ('Contact')}
                </div>
        </div>
  )
}