import React from 'react'
import Top from '../Body Section/Top Section/Top'
import './styles/hardware.css'



const Hardware= () => {
  return (
    <div className="hardware">
        <Top/>
      <h2>Hardware</h2>
      <div class="row">
    <div class="column">
      <div class="card">Shift Details</div>
    </div>
    <div class="column">
      <div class="card">Status Report</div>
    </div>
    <div class="column">
      <div class="card">Status Report</div>
    </div>
    <div class="column">
      <div class="card">Online Check</div>
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

export default Hardware;