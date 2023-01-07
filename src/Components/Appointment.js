import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../Css/Appointment.css';

function Appointment(props) {
  return (
    <div className='appointment-card'>
        <div className="patient-id">
            <span>Patient Id:</span> {props.id}
        </div>
        <div className="patient-name">
            <span>Name:</span> {props.name}
        </div>
        <div className="patient-gender">
            <span>Gender:</span> {props.gender}
        </div>
        <div className="patient-contact">
            <span>Contact:</span> {props.contact}
        </div>
        <div className="patient-email">
            <span>Email:</span> {props.email}
        </div>
        <hr />
        <div className="patient-purpose">
            <span>Purpose:</span> {props.purpose}
        </div>
        <div className="patient-appdate">
            <span>Appointment Date:</span> {props.date}
        </div>
        <hr />
        <div className="patient-history">
            <span>Medical History:</span><br/> {props.history}
        </div>
        <div className="buttons">
            <div className="videocall">
                <Link to='#'>Video Call</Link>
            </div>
            <div className="textmsg">
                <Link to='#'>Text Message</Link>
            </div>
            <div className="cancel">
                <Link to='#'>Cancel Appointment</Link>
            </div>
        </div>
    </div>
  )
}

export default Appointment;