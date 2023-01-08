import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Doctor from '../Components/Doctor';

function Doctors() {
  const [loading, setLoading] = useState(true)

  const [data, setData] = useState([])
    useEffect(() => { 
      const getData = async ()=>{
            try {
            const resp = await axios.get(`http://localhost:5000/doctors`) 
            setData(resp.data.data);
            setLoading(false)
            console.log(resp.data.data)
        } catch (error) {
          setLoading(true)
            console.log("[Get Doctors]",error)
        }
      }
      getData()
        
    },  [])


  return (
    <div className='doctor-list'>
        <h1>Our Professionals</h1>
        <div className="all-doctors">
          { !loading &&
            data.map((doctor) => {
              return <Doctor name={doctor.username} speciality={doctor.speciality} education='MBBS' experience='5+' email={doctor.email}/>
            })
          }
        </div>
    </div>
  )
}

export default Doctors;