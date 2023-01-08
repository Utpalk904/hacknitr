import React, { useState } from 'react';
import '../Css/login.css';
import {Link} from 'react-router-dom';
import { FaLock, FaUserCircle } from 'react-icons/fa';
import axios from 'axios';

export default function Login(props) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")


    const login_submit = (e) => {
        e.preventDefault();
        const form_data = {
          "username":username,
          "password":password
        }
        console.log(form_data);
        axios.post(`http://localhost:5000/${props.type}/login`, form_data)
            .then(res => {
                console.log(res.data)
                    localStorage.setItem("token", res.data.data.token);
                    localStorage.setItem("username", res.data.data.username);
                    window.location = props.type === "doctor" ? "/dashboard" : "/"
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="login_container">
            <div className="login">
                <h2>Login</h2>
                <h3>Welcome Back</h3>
                <form className="login-form">
                    <div className="textbox">
                        <input type="email" placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                        <span className="material-symbols-outlined"><FaUserCircle/></span>
                    </div>
                    <div className="textbox">
                        <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                        <span className="material-symbols-outlined"><FaLock/></span>
                    </div>
                    <button type="submit" onClick={(e) => login_submit(e) }>Login</button>
                    <Link to={`/${props.type}/forgotPassword`}>
                        Forgot your credentials?
                    </Link>
                    <p>Or</p>
                    <Link to={`/${props.type}/register`}>
                        Create New Account
                    </Link>
                </form>
            </div>
        </div>
    )
}
