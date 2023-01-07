import React, { useState } from 'react';
import '../Css/otp.css';
import axios from 'axios';
export default function OTP() {
    const [otp, setOtp] = useState('');
    const otp_submit = (e) => {
        e.preventDefault();
        const otp_data = {
            'otp': otp
        }
        console.log(otp_data);
        axios.post("http://localhost:5000/user/reset", otp_data)
        .then(res => {
                console.log(res.data)
                localStorage.setItem("otp",otp)
                window.location = "/user/changePassword"
        })
        .catch(err => {
                console.log(err)
        })

    }
    return (
        <div className="container">
            <form className="otp_box" onSubmit={otp_submit}>
                <p className="otp_title">Enter OTP</p>
                <p className="detail">Enter OTP sent on Email to reset your password</p>
                <input type="text" className="otp_field" id="otp_field" maxLength='6' required value={otp} onChange={(e) => {
                    setOtp(e.target.value)
                }} />
                <input type="submit" value="Submit" className='otp_btn' id='otp_btn' />
            </form>
        </div>
    );
}
