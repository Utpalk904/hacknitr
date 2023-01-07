import styles from "../Css/AboutDoctors.module.css"
import React from "react";

function AboutDoctors() {
    return ( 
        <div className={styles.container}>
            <h1>Team of highly-trained & licensed experienced professionals</h1>
            <div className={styles.doctors}>
                <div className={styles.doctor}>
                    <img src="team1.jpg" alt=""></img>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        <h3>Martha M.Masters</h3>
                        <h4>Marketing - <span>WikiTravel</span></h4>
                    </div>
                </div>
                <div className={styles.doctor}>
                    <img src="team2.jpg" alt=""></img>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        <h3>Anna Vandana</h3>
                        <h4>CEO - <span>WikiTravel</span></h4>
                    </div>
                </div>
                <div className={styles.doctor}>
                    <img src="team3.jpg" alt=""></img>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        <h3>Maxi Milli</h3>
                        <h4>Public Relations - <span>WikiTravel</span></h4>
                    </div>
                </div>
                <div className={styles.doctor}>
                    <img src="team4.jpg" alt=""></img>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        <h3>Dr. Noice</h3>
                        <h4>Dean of Medicine - <span>WikiTravel</span> </h4>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default AboutDoctors;