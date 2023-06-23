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
      {/* <div className='searchBar flex'>
        <input type='text' placeholder='Search Dashboard'/>
        <BiSearchAlt className='icon'/>
      </div> */}

      <div className='adminDiv flex'>
        <MdOutlineNotificationsNone className='icon'/>
        <div className='adminImage'>
          <img src={img} alt='Admin Image'/>
        </div>
      </div>
     </div>

     {/* <div className="cardSection flex"> 
      <div className="rightCard flex">
        <h1>Create and sell extraordinary products</h1>
        <p>The world's fast growing industry today are natural made products!</p>
    
    <div className="buttons flex">
      <button className='btn'>Explore More</button>
      <button className='btn transparent'>Top Sellers</button>
    </div>

    <div className='videoDiv'>
    <img src={img} alt='Admin Image'/>
    </div>
    </div>
  </div> */}

</div>
  )
}

export default Top;