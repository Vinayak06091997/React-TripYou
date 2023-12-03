import React from 'react'
import './contactData.css'

function contactData() {
  return (
    <div className='from-container'>
        <h1>Send a message to us!</h1>
        <form>
            <input placeholder='Name'/>
            <input placeholder='Email'/>
            <input placeholder='Subjects'/>
            <textarea placeholder='Message' rows='4'/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default contactData