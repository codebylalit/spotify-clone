import React from 'react'
import Body from '../body/Body.js'
import Sidebar from '../sidebar/Sidebar.js'
import "./Player.css";
import Footer from '../footer/Footer.js';

function Player({spotify}) {
  return (
    <div className='player'>
      <div className='player_body'>
        <Sidebar/>
        <Body spotify={spotify} />
         {/*sidebar*/}
        {/*body*/}
      </div>
       <Footer/>
        {/*footer*/}
    </div>
  )
}

export default Player