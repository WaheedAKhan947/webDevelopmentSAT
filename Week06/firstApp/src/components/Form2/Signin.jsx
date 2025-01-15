import React from 'react'
import "./Form2.css"

const Signin = () => {
  return (
    
    <div className='c1'>
      <div className='c2'>
        <h1>Sign in</h1>
        </div>
        <label htmlFor="name">Email</label><br />
        <input type="text" placeholder='Enter your Email' /><br />
        <label htmlFor="name">Password</label><br />
        <input type="Password" placeholder='At least 8 characters' /><br />
        <br/>
        <button>Sign in</button>
    </div>
  
  )
}

export default Signin