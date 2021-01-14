import React, { useEffect, useState } from 'react';
import './../Style/Main.css'
import harshit from './../Asset/harshit.jpeg'
import { Navbar } from '../Components/Navbar';
import axios from 'axios';
import { GithubContributions } from 'react-github-graph'

const Main = () => {
  const [quote, handleQuote] = useState({})
  const [emailCopy,handleCopy] = useState('EMAIL')
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
  const name = ['<', 'H', 'A', 'R', 'S', 'H', 'I', 'T', '  ', 'G', 'A', 'K', 'H', 'A', 'R', '/', '>']
  const title = ['S', 'O', 'F', 'T', 'W', 'A', 'R', 'E', '_', 'E', 'N', 'G', 'I', 'N', 'E', 'E', 'R']

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

  const copyFunction = () => {
    handleCopy('EMAIL COPIED')
    let text = 'harshitga@gmail.com'
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);

    setTimeout(()=>{
        handleCopy('EMAIL')
    },2000)
  }

  return (
    <div className="main">
      <Navbar />
      <div className="comps">
        <div id="parent" style={{ width: '100%' }}>
          {name.map(val => {
            return <span onMouseEnter={(e) => playSound()} onClick={(e) => playSound()} style={{ height: '4%', alignItems: "center" }}>{val}</span>
          })}
        </div>
        <div id="parent2" style={{ width: '100%' }}>
          {title.map(val => {
            return <span onMouseEnter={(e) => playSound2()} onClick={(e) => playSound2()} style={{ height: '2%', alignItems: "center" }}>{val}</span>
          })}
        </div>
        <div className="d-flex w-100 row justify-content-around">
          <div style={{ height: '5%' }}>
            <a className="linkani" target="blank" title="Open Linkedin" href="https://www.linkedin.com/in/harshit-gakhar-7b3921144/">linkedin</a>
          </div>

          <div >
            <a className="linkani" title="Open Github" target="blank" href="https://github.com/harshit860">Github</a> </div>
        </div>
        <div className="p-2 m-2 row">
          <span className="linkani"  >Location: Bangalore | Chandigarh</span>
        </div>
        <div className="p-2 m-2 row">
          <span className="linkani"  >Email: harshitga@gmail.com <button onClick={copyFunction} className="btn btn-dark" title="Copy email">{emailCopy}</button></span>

        </div>
        {/* <div style={{position:'absolute',top:0,right:0,padding:10,width:'20%'}}>
               <p style={{fontSize:25,color:'white'}}>{quote.quote} - {quote.author}</p>
          </div> */}
      </div>

    </div>
  )
}

export default Main;