import React, { useEffect, useState } from 'react';
import './../Style/Main.css'

import { Navbar } from '../Components/Navbar';

const Main = () => {

  const playSound = () => {
    var new1 = new Audio('https://freesound.org/data/previews/348/348463_3905081-lq.mp3')
    // ('https://freesound.org/data/previews/191/191618_2394245-lq.mp3')
    new1.volume = 0.2
    new1.play()
    
  }

  const playSound2 = () => {
    var new1 = new Audio('https://freesound.org/data/previews/191/191618_2394245-lq.mp3')
    // ('https://freesound.org/data/previews/191/191618_2394245-lq.mp3')
    new1.volume = 0.2
    new1.play()
  }
  let count = 0
  let count2 = 0
  const name = ['<', 'H', 'A', 'R', 'S', 'H', 'I', 'T', '  ', 'G', 'A', 'K', 'H', 'A', 'R', '/', '>']
  const title = ['S', 'O', 'F', 'T', 'W', 'A', 'R', 'E', ' ', 'D', 'E', 'V', 'E', 'L', 'O', 'P', 'E', 'R','_','R','U','N','N','E','R']
  useEffect(() => {

    const interval = setInterval(() => {
      if (count == name.length) {
        clearInterval(interval)
      }
      let parentDiv = document.querySelector('div')
      if (count < name.length) {
        if (count % 2 == 0) {
          var new1 = new Audio('https://freesound.org/data/previews/348/348463_3905081-lq.mp3')
          new1.volume = 0.2
          new1.play()
        }
        else
        {       
          var new1 = new Audio('https://freesound.org/data/previews/191/191618_2394245-lq.mp3')
          new1.volume = 0.2 
          new1.play()        
        }
       
        parentDiv.querySelectorAll('span')[count].setAttribute('class', 'wow')
      }
      count = count + 1
    }, 100)
    const interval2 = setInterval(() => {
      if (count2 == title.length) {
        clearInterval(interval)
      }
      let parentDiv2 = document.querySelector('#parent2')
      if (count2 < title.length) {

        parentDiv2.querySelectorAll('span')[count2].setAttribute('class', 'wow2')
      }
      count2 = count2 + 1
    }, 100)
    return () => clearInterval(interval) || clearInterval(interval2)
  }, []);

  return (
    <div className="main">
      <Navbar />
      <div className="comps" style={{ marginTop: '5%' }}>
        <div id="parent" style={{ width: '100%' }}>
          {name.map(val => {
            return <span onMouseEnter={(e) => playSound()} onClick={(e) => playSound()} style={{ height: '1%', alignItems: "center" }}>{val}</span>
          })}
        </div>
        <div id="parent2" style={{ width: '100%' }}>
          {title.map(val => {
            return <span onMouseEnter={(e) => playSound2()} onClick={(e) => playSound2()} style={{ height: '1%', alignItems: "center" }}>{val}</span>
          })}
        </div>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent:"space-around"}}>
          <div >
            <a className="linkani"  target="blank"   href="https://www.linkedin.com/in/harshit-gakhar-7b3921144/">linkedin</a>
          </div>
          <div >
          <a className="linkani"  target="blank" href="https://github.com/harshit860">Github</a> </div>
        </div>
        <div >
            <span className="linkani"  >Location: Bangalore | Chandigarh</span>
          </div>
      </div>

    </div>
  )
}

export default Main;