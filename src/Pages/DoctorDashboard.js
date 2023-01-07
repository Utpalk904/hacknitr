import React, { useEffect, useState } from 'react';
import Appointment from '../Components/Appointment';
import '../Css/Dashboard.css';
import axios from 'axios';

function DoctorDashboard() {
const [username, setUsername] = useState("")

      useEffect(() => {
        const token = localStorage.getItem("token")
        async function verifyToken() {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                const resp = await axios.get("http://localhost:5000/doctor/check_login", config)
                if (resp.data.verified){
                  console.log("verified")
                  setUsername(localStorage.getItem("username"))
                }

            } catch (error) {
                window.location = "/doctor/login"
            }
        }
        verifyToken()
    }, [])

  return (
    <div className='dashboard'>
        <h1>{username}</h1>
        <h1>Your Appointments</h1>
        <hr />
        <div className="appointment-list">
            <Appointment name='Utpal Kumar' gender='Male' contact='8700255519' email='utpalk904@gmail.com' purpose='Check-up' history='None' date='9 Jan, 2023' id='utpalk904' />
            <Appointment name='Utpal Kumar' gender='Male' contact='8700255519' email='utpalk904@gmail.com' purpose='Check-up' history='None' date='9 Jan, 2023' id='utpalk904' />
            <Appointment name='Utpal Kumar' gender='Male' contact='8700255519' email='utpalk904@gmail.com' purpose='Check-up' history='None' date='9 Jan, 2023' id='utpalk904' />
            <Appointment name='Utpal Kumar' gender='Male' contact='8700255519' email='utpalk904@gmail.com' purpose='Check-up' history='None' date='9 Jan, 2023' id='utpalk904' />
        </div>
    </div>
  )
}

export default DoctorDashboard;