import { useState } from 'react';
import React from 'react';
// import axios from "axios";
import { Link, useNavigate, useEffect } from "react-router-dom";
 import { useContext } from "react";
 import { AuthContext } from "../context/authContext";

const Login = () => {
  
   const [err, setError] = useState(null);
   const navigate = useNavigate();
   const { login } = useContext(AuthContext);
  const [inputs, setLogin] = useState({
    userName:"",
    password:""
  })
  const handleChange = e=>{
    setLogin(prev =>({...prev,[e.target.name]: e.target.value}))
  }
  const handleSubmit = async e=>{
    e.preventDefault()
    try{
       await login(inputs)
      navigate("/"); 
    }catch(err){
      setError(err.response.data);
    }
  }

    return (
        <div className='auth'>
            <h1>Login</h1>
            <form >
                <input type="text" placeholder='Username' name='userName'onChange={handleChange}/>
                <input type="password" placeholder='Password'name='password'onChange={handleChange}/>
                <button  onClick={handleSubmit}>Login</button>
                 
                <span>If you have an account <Link to="/register">Rigester </Link>
                </span>
            </form>
        </div>
    );
}

export default Login;
