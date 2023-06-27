import React from 'react'
import './Sidebar.css'

import { IoMdSpeedometer } from "react-icons/io";
// import { IoMdSpeedometer} from "react-icons/io";
import { IoHardwareChip} from "react-icons/io5";
import { BsFillPeopleFill} from "react-icons/bs";
import { TbLogout2} from "react-icons/tb";
import { MdAdminPanelSettings} from "react-icons/md";
import { BsQuestionCircle} from "react-icons/bs";
import {MdOutlineLocalPolice} from 'react-icons/md';

const Sidebar = () => {
  return (
    
    <div className='sideBar grid'>
     <div className='logoDiv flex'>
        <MdOutlineLocalPolice className='icon'/>
          <h2 >TRACKPATROL</h2>
      </div><hr/>


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
            <IoHardwareChip className="icon"/>
            <span className="smallText">
              Manage Hardware
              </span>
          </a>
        </li>
        <li className="listItem">
          <a href="#" className='menuLink flex'>
            <BsFillPeopleFill className="icon"/>
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
            <MdAdminPanelSettings className="icon"/>
            <span className="smallText">
            Manage Admin
              </span>
          </a>
        </li>
        <li className="listItem">
          <a href="#" className='menuLink flex'>
            <TbLogout2 className="icon"/>
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