import React from 'react';
import '../Css/login.css';
import {Link} from 'react-router-dom';
import { FaLock, FaUserCircle } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Register() {
    return (
        <div className="login_container">
            <div className="login">
                <h2>Register</h2><br />
                <form className="login-form">
                    <div className="textbox">
                        <input type="text" placeholder='Username' />
                        <span className="material-symbols-outlined"><FaUserCircle/></span>
                    </div>
                    <div className="textbox">
                        <input type="email" placeholder='Email' />
                        <span className="material-symbols-outlined"><MdEmail/></span>
                    </div>
                    <div className="textbox">
                        <input type="password" placeholder='Password' />
                        <span className="material-symbols-outlined"><FaLock/></span>
                    </div>
                    <div className="textbox">
                        <input type="password" placeholder='Confirm Password' />
                        <span className="material-symbols-outlined"><FaLock/></span>
                    </div>
                    <button type="submit">Register</button>
                    <Link to="/login">
                        Already have an account? Login
                    </Link>
                </form>
            </div>
        </div>
    )
}
