import React, { useEffect, useState } from "react";
import styles from "../Css/Hero.module.css";
import {FaAngleLeft, FaAngleRight, FaCircle} from "react-icons/fa";
import { Link } from "react-router-dom";
import Doc1 from '../Assets/doctor1.jpg';
import Doc2 from '../Assets/doctor2.jpg';
import Doc3 from '../Assets/doctor3.jpg';
import Doc4 from '../Assets/doctor4.jpg';
import Doc5 from '../Assets/doctor5.jpg';
import Doc6 from '../Assets/doctor6.jpg';

function Hero() {
const images = [Doc1,Doc2,Doc3,Doc4,Doc5,Doc6];

const [index, setIndex] = useState(0)

useEffect(() => {
  const interval = setInterval(() => {
    setIndex(prev=>(prev%6)+1);
  }, 3000);
  return () => clearInterval(interval);
}, [index]);


    return ( 
        <div className={styles.container}>
            <img src={images[index-1]}></img>
            <div className={styles.slider}>
                <FaCircle onClick={() => setIndex(1)}/>
                <FaCircle onClick={() => setIndex(2)}/>
                <FaCircle onClick={() => setIndex(3)}/>
                <FaCircle onClick={() => setIndex(4)}/>
                <FaCircle onClick={() => setIndex(5)}/>
                <FaCircle onClick={() => setIndex(6)}/>
            </div>
            <div className={styles.main}>
                <h1>Dr. MedLocal</h1>
                <h3>Welcomes you to this virtual clinic</h3>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <Link style={{backgroundColor:"#4e5fcb"}} to="/appointment">Book Appointment</Link>
                    <Link style={{backgroundColor:"#5ab7ed"}} to="#">Get Special Offers</Link>
                </div>
            </div>
        </div>
     );
}

export default Hero;