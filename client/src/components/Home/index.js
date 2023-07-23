import React, { useState,useEffect } from 'react'
import './buttons.css'
import logo from '../../../public/images/logo.png'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    
    //login credentials
    const [ loginCredential, setLoginCredential ] = useState({ username: '', password: ''})
   const navigate = useNavigate()
    
    const handleSubmit = (e) =>{
        e.preventDefault();
    
        fetch("/API/login", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify( loginCredential ),
          }).then((res) => {
            if (res.ok) {
              navigate("/");
            }
            else  alert("Username/Password is wrong!!")
          })

    }

    const handleChange = (e) =>{
        e.presist()
        setLoginCredential( prev =>{
            return { ...prev, [e.targe.id]: e.targe.value}
        })
    }
    

    return <>
        <div className = 'login-wraper'>
            <div className = 'logo-wraper'>
                <img src = { logo } alt = 'logo'/>
            </div>
            <h3>Welcome to Exam Copy Managment System</h3>
            <form className = 'login-form' onSubmit = { handleSubmit }>
                <input 
                    id = 'username'
                    className = 'login-input'
                    type = 'text'
                    placeholder='Enter your admin username..'
                    onChange = { handleChange }
                />
                <input 
                    id = 'password'
                    className = 'login-input'
                    type = 'password'
                    password = 'Enter your password..'  
                    onChange = { handleChange }
                />
                <button
                    type = 'submit'
                >
                    Login
                </button>
            </form>
        </div>
    </>

}

export default Login 