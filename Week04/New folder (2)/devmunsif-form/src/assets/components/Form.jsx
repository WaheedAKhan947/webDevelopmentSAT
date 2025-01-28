import React, { useState } from 'react';
import './Form.css'
const Form = () => {
    const [email ,setemail]=useState("");
    const [password ,setpassword]=useState("");
    const submit = async ()=>{
        let payload={email,password}
        // const response = await fetch('https://taxirapport-backend-nybk.onrender.com/api/v1/auth/login', payload);
        console.log(response.message);
}
   
    return (
    <div className='containor'>
        <div className="heading">
            <h1>Sign In</h1>
        </div>
        <div className="form-input">
        <label htmlFor="text">Email</label>
            <input onChange={(e)=>setemail(e.target.value)} type="text"placeholder='Email'/>
            <label htmlFor="number">Password</label>
            <input onChange={(e)=>setpassword(e.target.value)} type="password"placeholder='Password'/>
         </div>
           <button onClick={submit}>Sign In</button>
    </div>
  );
}

export default Form;
