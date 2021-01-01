import React from 'react'
import { Navbar } from '../Components/Navbar'
import './../Style/Main.css'

export default function Skills() {
  return (
    <div className="skill">
      <Navbar />
      <div className="skillfill">
        <img src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png"  width="140px" height="140px" />  
        <img src="https://www.prchecker.info/free-icons/128x128/mysql_128_px.png" height="140px" />
        <img src="https://www.retiredwhatnow.net/wp-content/uploads/2018/03/html_2.png"  width="140px" height="140px" />  
      </div>
    </div>
  )
}
