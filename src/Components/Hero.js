import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css"
import {FaAngleLeft, FaAngleRight, FaCircle} from "react-icons/fa"

function Hero() {
const images = ['doctor1.jpg','doctor2.jpg','doctor3.jpg','doctor4.jpg','doctor5.jpg','doctor6.jpg']

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
                    <a style={{backgroundColor:"#4e5fcb"}} href="#">Book Appointment</a>
                    <a style={{backgroundColor:"#5ab7ed"}} href="#">Get Special Offers</a>
                </div>
            </div>
        </div>
     );
}

export default Hero;