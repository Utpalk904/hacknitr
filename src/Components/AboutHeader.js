import { NavLink } from "react-router-dom";
import styles from "../Css/AboutHeader.module.css"

function AboutHeader() {
    return ( 
        <>
        <div className={styles.image}>
            <div className={styles.flexsb}>
                <h1>About</h1>
                <NavLink className={styles.bookbtn}>Book Your Appointment</NavLink>
            </div>
        </div>
        </>
     );
}

export default AboutHeader;