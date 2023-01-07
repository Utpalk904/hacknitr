import React, { useState } from 'react';
import '../Css/login.css';
import {Link} from 'react-router-dom';
import { FaLock, FaUserCircle, FaUserNurse } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import axios from 'axios';

export default function DoctorRegister() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [regno, setRegno] = useState("")
    const [speciality, setSpeciality] = useState("")

    const register_submit = (e) => {
        e.preventDefault();
        const form_data = {
          "username":username,
          "email":email,
          "password":password,
          "speciality":speciality,
          "registrationNo":regno
        }
        console.log(form_data);
        axios.post(`http://localhost:5000/doctor/register`, form_data)
            .then(res => {
                console.log(res.data)
                    window.location = "/doctor/login"
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="login_container">
            <div className="login">
                <h2>Register</h2><br />
                <form className="login-form">
                    <div className="textbox">
                        <input type="text" placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                        <span className="material-symbols-outlined"><FaUserCircle/></span>
                    </div>
                    <div className="textbox">
                        <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <span className="material-symbols-outlined"><MdEmail/></span>
                    </div>
                    <div className="textbox">
                        <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <span className="material-symbols-outlined"><FaLock/></span>
                    </div>
                    <div className="textbox">
                        <input type="password" placeholder='Confirm Password' />
                        <span className="material-symbols-outlined"><FaLock/></span>
                    </div>
                    <div className="textbox">
                        <input type="text" placeholder='Speciality' value={speciality} onChange={(e)=>setSpeciality(e.target.value)}/>
                        <span className="material-symbols-outlined"><FaUserNurse/></span>
                    </div>
                    <div className="textbox">
                        <input type="text" placeholder='Regstration number' value={regno} onChange={(e)=>setRegno(e.target.value)} />
                        <span className="material-symbols-outlined"><FaLock/></span>
                    </div>
                    <button type="submit" onClick={(e)=> register_submit(e)}>Register</button>
                    <Link to={`/doctor/login`}>
                        Already have an account? Login
                    </Link>
                </form>
            </div>
        </div>
    )
}
