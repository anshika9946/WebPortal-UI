import React from 'react'
import './Dashboard.css'
import Top from './Body Section/Top Section/Top'
import Listing from './Body Section/Listing Section/Listing'
import Activity from './Body Section/Activity Section/Activity'


const Dashboard = () => {
  return (
    <div className="mainContent">
      <Top/>
      
      <div className="bottom flex">
        <Listing/>
        <Activity/>
        </div> 
    </div>
  )
}

export default Dashboard;