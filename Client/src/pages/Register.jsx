import React, { useState } from 'react';
import { Link, redirect } from 'react-router-dom';
import axios from 'axios';


const Register = () => {
  const [inputs,  setInputs] = useState({
    userName:"",
    email:"",
    password:""
  })


  const handleChange = e=>{
    setInputs(prev =>({...prev,[e.target.name]: e.target.value}))

  }
  const handleSubmit = async e=>{
    e.preventDefault()
    try{
      const res = await axios.post("/api/Register", inputs)
      redirect("/login")
      console.log(res)
    }catch(err){
      console.log(err)
    }
  }
  console.log(inputs)
    return (
        <div className='auth'>
            <h1>Register</h1>
            <form >
                <input required type="text" placeholder='Username' name='userName'onChange={handleChange}/>
                <input required type="email" placeholder='Email' name='email' onChange={handleChange}/>
                <input required type="password" placeholder='Password' name='password' onChange={handleChange}/> 
                <button onClick={handleSubmit}>Register</button>
                <span>Do you have an account <Link to="/Login">Login </Link>
                </span>
            </form>
        </div>
    );
}

export default Register;
