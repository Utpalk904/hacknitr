import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Css/forgot_pass.css';
import axios from 'axios';

export default function Forgot_Pass() {
    const [mail, setMail] = useState('');
    const forgot_submit = (e) => {
        e.preventDefault();
        const forgot_data = {
            "email": mail
        }
        console.log(forgot_data);
        axios.post("http://localhost:5000/user/forgotPassword", forgot_data)
            .then(res => {
                console.log(res.data)
                window.location = "/user/verifyOtp"
            })
            .catch(err => {
                console.log(err)
            })

    }
    let str = (String)(window.location);
    return (
        <div className="forgotContainer">
            <form className="reset_password" onSubmit={forgot_submit}>
                <h2 className="reset_title">Forgot Password</h2>
                <p className="detail">Please Enter the email address that you used to register, and we will send you and OTP to reset your Password</p>
                <input type="email" className="reset_field" id="reset_field" placeholder='Enter Email' required value={mail} onChange={(e) => {
                    setMail(e.target.value)
                }} />
                <input type="submit" value="Reset My Password" className='reset_btn' />
                <p className="sign_in">Return to <Link to={str.includes('doctor') ? '/doctor/login' : '/user/login'}>Sign in</Link></p>
            </form>
        </div>
    );
}
