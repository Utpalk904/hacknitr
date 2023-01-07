import React from 'react';
import Appointment from '../Components/Appointment';
import '../Css/Dashboard.css';

function DoctorDashboard() {
  return (
    <div className='dashboard'>
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