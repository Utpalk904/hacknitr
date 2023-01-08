import React from 'react';
import '../Css/Doctor.css';
import Doc1 from '../Assets/doc1.jpg';

function Doctor(props) {
  return (
    <div className='doctor-profile'>
        <div className="doctor-pic">
            <img src={Doc1} alt="doc1" />
        </div>
        <div className="doctor-name">
            Dr. {props.name}
        </div>
        <div className="doctor-spec">
            {props.speciality}
        </div>
        <div className="doctor-edu">
            {props.education}
        </div>
        <div className="doctor-exp">
            {props.experience} years experience
        </div>
        <hr />
        <div className="doctor-email">
            {props.email}
        </div>
    </div>
  )
}

export default Doctor;