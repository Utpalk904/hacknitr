import React, { useEffect, useState } from 'react';
import Appointment from '../Components/Appointment';
import '../Css/Dashboard.css';
import axios from 'axios';

function DoctorDashboard() {
const [username, setUsername] = useState("")
const [verified,setVerified] = useState(false)
const [loading, setLoading] = useState(true)

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
                  setVerified(true)
                  setUsername(localStorage.getItem("username"))
                }
            } catch (error) {
                setVerified(false)
                window.location = "/doctor/login"
            }
        }
        verifyToken()
    }, [])

  const [data, setData] = useState([])

    useEffect(() => { 
      const getData = async ()=>{
            try {
            const resp = await axios.get(`http://localhost:5000/doctors/appointments`) 
            setData(resp.data.appointments);
            setLoading(false)
            console.log(resp.data.appointments)
        } catch (error) {
          setLoading(true)
            console.log("[Get Doctors]",error)
        }
      }
      if(verified)
        getData()
        
    },  [verified])

  return (
    <div className='dashboard'>
        <h1>{username}</h1>
        <h1>Your Appointments</h1>
        <hr />
        <div className="appointment-list">
            {
                !loading && 
                data.map((appointment) => {
                    return  <Appointment name={appointment.name} gender={appointment.gender} contact={appointment.phone} department={appointment.speciality} date={appointment.date}/>
                })
                
            }
        </div>
    </div>
  )
}

export default DoctorDashboard;