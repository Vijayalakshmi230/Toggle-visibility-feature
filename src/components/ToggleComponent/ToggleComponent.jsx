import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import './ToggleComponent.css'

function ToggleComponent() {
  const click = () => {
    const change = document.getElementById('show');
    const display = document.getElementById('demo');
    if (change.innerHTML === 'Show Details') {
      change.innerHTML = 'Hide Details';
      display.innerHTML = 'Dept:CSE';
    } else {
      change.innerHTML = 'Show Details';
      display.innerHTML = '';
    }
  }; 
  
  return (
    <React.Fragment>
      <div className="container">
        <FontAwesomeIcon icon={faEye} className='eye' />
        <div className="details">
          <h1>Name:Punyala VijayaLakshmi</h1>
          <p>Registartion No:212221040134</p>
        </div>
        <button className='btn' id='show' onClick={click}>Show Details</button>
        <p id='demo'></p>
      </div>
    </React.Fragment>
  )
}

export default ToggleComponent