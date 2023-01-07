import React from 'react';
import '../Css/login.css';
import {Link} from 'react-router-dom';
import { FaLock, FaUserCircle } from 'react-icons/fa';

export default function Login() {
    return (
        <div className="login_container">
            <div className="login">
                <h2>Login</h2>
                <h3>Welcome Back</h3>
                <form className="login-form">
                    <div className="textbox">
                        <input type="email" placeholder='Username' />
                        <span className="material-symbols-outlined"><FaUserCircle/></span>
                    </div>
                    <div className="textbox">
                        <input type="password" placeholder='Password' />
                        <span className="material-symbols-outlined"><FaLock/></span>
                    </div>
                    <button type="submit">Login</button>
                    <Link to="/forget">
                        Forgot your credentials?
                    </Link>
                    <p>Or</p>
                    <Link to="/register">
                        Create New Account
                    </Link>
                </form>
            </div>
        </div>
    )
}
