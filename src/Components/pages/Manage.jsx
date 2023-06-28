import React from 'react'
import Top from '../Body Section/Top Section/Top'
import './styles/manage.css'
import img from '/Assets/Map.png';

const Manage= () => {
  return (
    <div className="manage">
       <Top/>
      <h2>Ongoing Bandobast</h2>
      <div class="cards">
<img src={img} alt="Avatar" />

</div>
<div class="row">
    <div class="column">
      <div class="card">Shift Details</div>
    </div>
    <div class="column">
      <div class="card">Broadcast</div>
    </div>
    <div class="column">
      <div class="card">Status Report</div>
    </div>
    <div class="column">
      <div class="card">Online Check</div>
    </div>
</div>
    </div>
  )
}

export default Manage;