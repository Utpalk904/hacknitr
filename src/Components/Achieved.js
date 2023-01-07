import { useState } from "react";
import styles from "../Css/Achieved.module.css";
// import styles from "../Css/Delivered.module.css";
import {FaBriefcaseMedical, FaPills, FaHospital, FaUserNurse} from "react-icons/fa";

function Achieved() {
    const [patientsServed, setPatientsServed] = useState('+3000')
    const [treatments, setTreaments] = useState('3800')
    const [clinics, setClinics] = useState('13')
    const [employees, setEmployees] = useState('80')
    return ( 
        <div className={styles.container}>
            <div>
                <FaBriefcaseMedical style={{fontSize:"80px",color:"lightblue"}}/>
                <div className={styles.type}>
                    <h3>{patientsServed}</h3>
                    <h2>Patients served</h2>
                </div>
            </div>
            <div>
                <FaPills style={{fontSize:"80px",color:"lightblue"}}/>
                <div className={styles.type}>
                    <h3>{treatments}</h3>
                    <h2>Treatments</h2>
                </div></div>
            <div>
                <FaHospital style={{fontSize:"80px",color:"lightblue"}}/>
                <div className={styles.type}>
                    <h3>{clinics}</h3>
                    <h2>Clinics</h2>
                </div>
            </div>
            <div>
                <FaUserNurse style={{fontSize:"80px",color:"lightblue"}}/>
                <div className={styles.type}>
                    <h3>{employees}</h3>
                    <h2>Employees</h2>
                </div>            
            </div>
        </div>
     );
}

export default Achieved;