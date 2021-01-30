import React, { useEffect, useState } from 'react';
import './../Style/Main.css'
import harshit from './../Asset/harshit.jpeg'
import { Navbar } from '../Components/Navbar';
import axios from 'axios';
import { GithubContributions } from 'react-github-graph'

const Main = () => {
  const [quote, handleQuote] = useState({})
  const [emailCopy, handleCopy] = useState('EMAIL')
  const getQuote = () => {
    // axios.get('http://quotes.stormconsultancy.co.uk/random.json',{

    // })
    //   .then(resp =>{
    //       console.log(resp)
    //       handleQuote(resp.data)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
  }

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
  let count3 = 0
  let count4 = 0
  const name = ['<', 'H', 'A', 'R', 'S', 'H', 'I', 'T', 'G', 'A', 'K', 'H', 'A', 'R', '/', '>']
  const title = ['S', 'O', 'F', 'T', 'W', 'A', 'R', 'E', '_', 'E', 'N', 'G', 'I', 'N', 'E', 'E', 'R']
  const fit = ['F', 'I', 'T', 'N', 'E', 'S', 'S', ' ', 'F', 'A', 'N', 'A', 'T', 'I', 'C',]
  const creator = ['C','R','E','A','T','O','R']

  useEffect(() => {
    getQuote()
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
        else {
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
        clearInterval(interval2)
      }
      let parentDiv2 = document.querySelector('#parent2')
      if (count2 < title.length) {

        parentDiv2.querySelectorAll('span')[count2].setAttribute('class', 'wow2')
      }
      count2 = count2 + 1
    }, 100)

    const interval3 = setInterval(() => {
      if (count3 == fit.length) {
        clearInterval(interval3)
      }
      let parentDiv3 = document.querySelector('#parent3')
      if (count3 < fit.length) {

        parentDiv3.querySelectorAll('span')[count3].setAttribute('class', 'wow2')
      }
      count3 = count3 + 1
    }, 100)

    const interval4 = setInterval(() => {
      if (count4 == creator.length) {
        clearInterval(interval4)
      }
      let parentDiv4 = document.querySelector('#parent4')
      if (count4 < creator.length) {

        parentDiv4.querySelectorAll('span')[count4].setAttribute('class', 'wow2')
      }
      count4 = count4 + 1
    }, 100)
    return () => clearInterval(interval) || clearInterval(interval2) || clearInterval(interval3) || clearInterval(interval4)
  }, []);

  const copyFunction = () => {
    handleCopy('EMAIL COPIED')
    let text = 'harshitga@gmail.com'
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);

    setTimeout(() => {
      handleCopy('EMAIL')
    }, 2000)
  }

  return (
    <div className="main container">
      {/* <Navbar /> */}
      <div className="comps">
        <div id="parent" className="mb-3">
          {name.map(val => {
            return <span onMouseEnter={(e) => playSound()} onClick={(e) => playSound()} style={{ height: '1%', alignItems: "center", color: 'white' }}>{val}</span>
          })}
        </div>
        <div id="parent2" style={{ width: '100%', marginTop: '-150px', justifyContent: "flex-start" }}>
          {title.map(val => {
            return <span onMouseEnter={(e) => playSound2()} onClick={(e) => playSound2()} style={{ height: '1%', alignItems: "center", color: 'white' }}>{val}</span>
          })}
        </div>
        <div id="parent3" style={{ width: '100%', marginTop: '-200px', justifyContent: "center" }}>
          {fit.map(val => {
            return <span onMouseEnter={(e) => playSound2()} onClick={(e) => playSound2()} style={{ height: '1%', alignItems: "center", color: "white" }}>{val}</span>
          })}
        </div>
        <div id="parent4" style={{ width: '100%', marginTop: '-250px'}}>
          {creator.map(val => {
            return <span onMouseEnter={(e) => playSound2()} onClick={(e) => playSound2()} style={{ height: '1%', alignItems: "center", color: "white" }}>{val}</span>
          })}
        </div>
        <div className="w-100  d-flex row justify-content-center" style={{ marginTop: '-250px', height: '10px' }}>
          <div className="m-1">
            <button onClick={() => window.open('https://www.linkedin.com/in/harshit-gakhar-7b3921144/')} className="btn btn-danger">Linkedin</button>
          </div>
          <div className="m-1">
            <button onClick={() => window.open('https://github.com/harshit860')} className="btn btn-danger">Github</button>
          </div>
          <span style={{ width: '100%' }}></span>
          <div className="mt-4">
            <span className="linkani"  >Location: Bangalore | Chandigarh</span>
          </div>
          <span style={{ width: '100%' }}></span>
          <div className="mt-4">
          <span className="linkani"  >Email: harshitga@gmail.com <button onClick={copyFunction} className="btn btn-dark" title="Copy email">{emailCopy}</button></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;