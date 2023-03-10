import React, { useEffect, useState } from 'react';
import '../Css/userform.css';
import InputBox from '../Components/Input_box';
import axios from 'axios';


export default function UserForm() {

    const [firstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [adate, setAdate] = useState("")
    const [speciality, setSpeciality] = useState("")
    const [phone, setPhone] = useState("")
    const [gender, setGender] = useState("")



      useEffect(() => {
        const token = localStorage.getItem("token")
        async function verifyToken() {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                const resp = await axios.get("http://localhost:5000/user/check_login", config)
                if (resp.data.verified)
                    console.log("verified")
            } catch (error) {
                window.location = "/user/login"
            }
        }
        verifyToken()
    }, [])


    const appointmentSubmit = (e) => {
        e.preventDefault();
        const form_data = {
          "name":firstName+" "+LastName,
          "gender":gender,
          "phone":phone,
          "date":adate,
          "speciality":speciality
        }
        const token = localStorage.getItem("token")
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        console.log(form_data);
        axios.post(`http://localhost:5000/user/appointments`, form_data, config)
            .then(res => {
                console.log(res.data)
                    window.location = "/"
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="form-container">
            <div className="form">
                <hr className="solid" />
                <div className="request_container">
                    <h1>Doctor Appointment Request Form</h1>
                    <h5>Fill the form below and we will get back soon to you for more updates and plan your appointment.</h5>
                </div>
                <div className="input_fields">
                    <div className="name">
                        <div className="title">Name</div>
                        <div className="input">
                            <InputBox id="fname" name="First Name" value={firstName} change={setFirstName} />
                            <InputBox id="lname" name="Last Name" value={LastName} change={setLastName}/>
                        </div>
                    </div>
                    <div className="dob">
                        <div className="title">Date of Birth</div>
                        <div className="input">
                            <div className="input_fields">
                                <input type="date" name="dob_input" id="dob_input" />
                            </div>
                        </div>
                    </div>
                    <div className="phone_gen">
                        <div className="gender">
                            <div className="title">Gender</div>
                            <div className="input">
                                <select name="gender" id="gender" className="gender_input" value={gender} onChange={(e) => setGender(e.target.value)}>
                                    <option value="pls_select">Please Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="phone">
                            <div className="title">Phone Number</div>
                            <div className="input">
                                <input type="text" className='phone_input' id="phone" placeholder='+91 XXXXXXXXXX'  value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="email">
                        <div className="title">Email</div>
                        <div className="input">
                            <input type="text" className='email_input' id="email" placeholder='ex: myname@example.com' />
                        </div>
                    </div>
                    <div className="facility_before">
                        <div className="title">Have you ever applied to our facility before?</div>
                        <div className="facility_select">
                            <div>
                                <input type="radio" name="facility_select" id="facility_yes" />
                                <label htmlFor="facility_yes">Yes</label>
                            </div>
                            <div>
                                <input type="radio" name="facility_select" id="facility_no" />
                                <label htmlFor="facility_no">No</label>
                            </div>
                        </div>
                    </div>
                    <div className="department">
                        <div className="title">Which department would you like to get an appointment from?</div>
                        <div className="input_field">
                            <input type="text" name="dept" id="dept" value={speciality} onChange={(e)=>setSpeciality(e.target.value)} />
                        </div>
                    </div>
                    <div className="procedure">
                        <div className="title">Which procedure do you want to make an appointment for?</div>
                        <div className="input_field">
                            <select name="procedure" id="procedure_input">
                                <option value="med_exam">Medical Examination</option>
                                <option value="doc_chk">Doctor Check</option>
                                <option value="res_ans">Result Analysis</option>
                                <option value="chk_up">Check Up</option>
                            </select>
                        </div>
                    </div>
                    <div className="appointment">
                        <div className="title">Preferred Appointment Date</div>
                        <div className="input_fields">
                            <input type="date" name="appointment_input" id="appointment_input"  value={adate} onChange={(e) => setAdate(e.target.value)}/>
                        </div>
                    </div>
                    <div className="past_history">
                        <div className="title">Any Past History?</div>
                        <div className="input_fields">
                            <textarea name="past_history_input" id="past_history_input" ></textarea>
                        </div>
                    </div>
                    <div className="symptoms">
                        <div className="title">Symptoms</div>
                        <div className="input_fields">
                            <input type="text" name='symoptoms_input' id='symoptoms_input' />
                        </div>
                    </div>
                </div>
                <div className="submit-button">
                    <button type="submit" className='submit-btn' onClick={(e)=> appointmentSubmit(e)}>Submit</button>
                </div>
            </div >
        </div >
    )
}
