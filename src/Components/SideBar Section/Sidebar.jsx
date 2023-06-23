import React from 'react'
import './Sidebar.css'

import logo from '/Assets/logo.svg'
import { IoMdSpeedometer } from "react-icons/io";
import { MdDeliveryDining} from "react-icons/md";
import { BsQuestionCircle} from "react-icons/bs";
import {BsGlobe} from 'react-icons/bs';

const Sidebar = () => {
  return (
    
      <div className='sideBar grid'>
{/* <div className="logoDiv flex">
<img src={logo} alt="Image Name"/>
 <h2>TRACK-PATROL</h2>
</div> */}
     <div className='logoDiv flex'>
        <BsGlobe className='icon'/>

          <h2>TRACK-PATROL</h2>

      </div>


<div className="menuDiv">
<h3 className="divTitle">
QUICK MENU
</h3>
<ul className="menuLists grid">
  <li className="listItem">
    <a href="#" className='menuLink flex'>
      <IoMdSpeedometer className="icon"/>
      <span className="smallText">
        Manage Bandobast
        </span>
    </a>
  </li>

  <li className="listItem">
    <a href="#" className='menuLink flex'>
      <MdDeliveryDining className="icon"/>
      <span className="smallText">
        Manage Hardware
        </span>
    </a>
  </li>

  <li className="listItem">
    <a href="#" className='menuLink flex'>
      <IoMdSpeedometer className="icon"/>
      <span className="smallText">
        Manage Personnel
        </span>
    </a>
  </li>

</ul>
</div>

<div className="settingsDiv">
<h3 className="divTitle">
SETTINGS
</h3>
<ul className="menuLists grid">
  <li className="listItem">
    <a href="#" className='menuLink flex'>
      <IoMdSpeedometer className="icon"/>
      <span className="smallText">
       Manage Admin
        </span>
    </a>
  </li>

  <li className="listItem">
    <a href="#" className='menuLink flex'>
      <MdDeliveryDining className="icon"/>
      <span className="smallText">
        Log Out
        </span>
    </a>
  </li>


</ul>
</div>

<div className="sideBarCard">
  <BsQuestionCircle className="icon"/>
  <div className="cardContent">
  <div className="circle1"></div>
  <div className="circle2"></div>

  <h3>Help Center</h3>
  <p>Having trouble in TracPatrol, please contact us for more questions</p>

  <button className="btn">Go to help center</button>
  </div>
  </div>


    </div>
   
  )
}

export default Sidebar;