import React from 'react'
import './Top.css'

import {BiSearchAlt} from 'react-icons/bi';
import {MdOutlineNotificationsNone} from 'react-icons/md';
import img from '/Assets/user.jpg';


const Top = () => {
  return (
    <div className="topSection">
     <div className="headerSection flex">
      <div className="title">
        <h1>Welcome to TrackPortal</h1>
        <p>Hello Admin, Welcome back!</p>
      </ div>

      <div className="topnav__search">
        <input type="text" placeholder="Search here..." />
        <BiSearchAlt className='icon'/>
      </div>

      <div className='adminDiv flex'>
        <MdOutlineNotificationsNone className='icon'/>
        <div className='adminImage'>
          <img src={img} alt='Admin Image'/>
        </div>
      </div>
     </div>

</div>
  )
}

export default Top;