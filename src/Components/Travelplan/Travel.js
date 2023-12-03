import React from 'react'
import './Travel.css'
function Travel() {
  return (
    <div className='TravelPlane'>
      <form className='form-travel'>
            <input placeholder='Source'/>
            <input placeholder='Destination'/>
            <input type='Date'/>
            <button>Search</button>
      </form>
     </div>
  )
}

export default Travel