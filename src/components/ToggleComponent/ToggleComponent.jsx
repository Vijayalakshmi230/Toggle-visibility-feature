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
      display.innerHTML = 'Additional details or content can go here...';
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
          <h1>Name:John Doe</h1>
          <p>Registartion No:12345</p>
        </div>
        <button className='btn' id='show' onClick={click}>Show Details</button>
        <p id='demo'></p>
      </div>
    </React.Fragment>
  )
}

export default ToggleComponent