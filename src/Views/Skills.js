import React, { useState } from 'react'
import { Navbar } from '../Components/Navbar'
import './../Style/Main.css'

export default function Skills() {
  const [backgroundColor, handleBC] = useState('#1d1d1d')

  function change(skill) {
    var new1 = new Audio('https://freesound.org/data/previews/245/245645_1038806-lq.mp3')
    new1.volume = 0.2 
    new1.play() 
  
    switch (skill) {
      case 'react':
        handleBC('#61dafb')
        break;
      case 'js':
        handleBC('#ffb400')
        break;
      case 'bootstrap':
        handleBC('#563d7c')
        break;
      case 'html':
        handleBC('#fd684b')
        break;
      case 'python':
        handleBC('#3d729f')
        break;
      case 'css':
        handleBC('#f33052')
        break;
      case 'sql':
        handleBC('#5e95ae')
        break;
    }
  }

  function leave() {
    handleBC('#1d1d1d')
  }
  return (
    <div className="skill" style={{ backgroundColor: backgroundColor , transition:'.5s'}}>
      <Navbar />
      <div className="skillfill">
        <div  onclick={() => change('js')} onMouseEnter={() => change('js')} onMouseLeave={() => leave()}>
          <img draggable src="https://a.thumbs.redditmedia.com/zDOFJTXd6fmlD58VDGypiV94Leflz11woxmgbGY6p_4.png" className="lang" style={{ borderRadius: '50%', border: '4px solid whitesmoke', height: "140px", width: "140px" }} />
          <p style={{ color: 'white', textAlign: 'center', fontStyle: 'italic', padding: 10 }}>JAVASCRIPT</p>
        </div>
        <div onMouseEnter={() => change('react')} onMouseLeave={() => leave()}>
          <img draggable src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png" className="lang" style={{ borderRadius: '50%', border: '4px solid whitesmoke', height: "140px", width: "140px" }} />
          <p style={{ color: 'white', textAlign: 'center', fontStyle: 'italic', padding: 10 }}>REACT</p>
        </div>
        <div onMouseEnter={() => change('sql')} onMouseLeave={() => leave()}>
          <img src="https://www.prchecker.info/free-icons/128x128/mysql_128_px.png" className="lang" style={{ borderRadius: '50%', border: '4px solid whitesmoke', height: "140px", width: "140px" }} />
          <p style={{ color: 'white', textAlign: 'center', fontStyle: 'italic', padding: 10 }}>MY-SQL</p>
        </div>
        <div onMouseEnter={() => change('html')} onMouseLeave={() => leave()}>
          <img src="https://www.retiredwhatnow.net/wp-content/uploads/2018/03/html_2.png" className="lang" style={{ borderRadius: '50%', border: '4px solid whitesmoke', height: "140px", width: "140px" }} />
          <p style={{ color: 'white', textAlign: 'center', fontStyle: 'italic', padding: 10 }}>HTML</p>
        </div>

        <div onMouseEnter={() => change('bootstrap')} onMouseLeave={() => leave()}>
          <img draggable src="https://hackr.io/tutorials/bootstrap/logo-bootstrap.svg?ver=1555328097" className="lang" style={{ borderRadius: '50%', border: '4px solid whitesmoke', height: "140px", width: "140px" }} />
          <p style={{ color: 'white', textAlign: 'center', fontStyle: 'italic', padding: 10 }}>BOOTSTRAP</p>
        </div>
        <div onMouseEnter={() => change('python')} onMouseLeave={() => leave()}>
          <img draggable src="https://static-s.aa-cdn.net/img/amazon/30600000503215/3cc55976c46a1427a2068b2adb4fce48" className="lang" style={{ borderRadius: '50%', border: '4px solid whitesmoke', height: "140px", width: "140px" }} />
          <p style={{ color: 'white', textAlign: 'center', fontStyle: 'italic', padding: 10 }}>PYTHON</p>
        </div>
        <div onMouseEnter={() => change('css')} onMouseLeave={() => leave()}>
          <img draggable src="https://www.flaticon.com/svg/static/icons/svg/331/331383.svg" className="lang" style={{ borderRadius: '50%', border: '4px solid whitesmoke', height: "140px", width: "140px" }} />
          <p style={{ color: 'white', textAlign: 'center', fontStyle: 'italic', padding: 10 }}>CSS</p>
        </div>
      </div>
    </div>
  )
}
