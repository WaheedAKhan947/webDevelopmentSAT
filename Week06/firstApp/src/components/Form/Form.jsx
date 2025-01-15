import React from 'react'
import "./Form.css";
const Form = () => {
  return (
 
      <div className='form'>
        <div className="tital"><h1>Form in React</h1></div>
        <div className="form-input">
        
            <input type="text" placeholder='User name' />
            <input type="Email" placeholder='User Email' />
            <input type="text" placeholder='User Phone number' />
            <input type="text" placeholder='User Address' />
            <input type="password" placeholder='User Password' />
            <input type="password" placeholder='User Confirm Password ' />
        </div>
        <button onClick={()=>confirm( "You clicked the button!")} >submit</button>
    </div>
  );
}

export default Form;