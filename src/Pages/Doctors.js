import React from 'react'
import Doctor from '../Components/Doctor';

function Doctors() {
  return (
    <div className='doctor-list'>
        <h1>Our Professionals</h1>
        <div className="all-doctors">
            <Doctor name='Utpal Kumar' speciality='Cardiology' education='MBBS' experience='10' email='utpalk904@gmail.com'/>
            <Doctor name='Utpal Kumar' speciality='Cardiology' education='MBBS' experience='10' email='utpalk904@gmail.com'/>
            <Doctor name='Utpal Kumar' speciality='Cardiology' education='MBBS' experience='10' email='utpalk904@gmail.com'/>
            <Doctor name='Utpal Kumar' speciality='Cardiology' education='MBBS' experience='10' email='utpalk904@gmail.com'/>
            <Doctor name='Utpal Kumar' speciality='Cardiology' education='MBBS' experience='10' email='utpalk904@gmail.com'/>
            <Doctor name='Utpal Kumar' speciality='Cardiology' education='MBBS' experience='10' email='utpalk904@gmail.com'/>
        </div>
    </div>
  )
}

export default Doctors;