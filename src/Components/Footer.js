import React from 'react';
import '../Css/Footer.css';
import { FaFacebookF, FaGooglePlus, FaBaseballBall, FaBehance, FaTwitter, FaArrowRight } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer_container">
                <div className="box1 footer_box">
                    <div className="title">WHO ARE WE</div>
                    <div className="content">
                        <h3>About us</h3>
                        <h3>Award & Achievements</h3>
                        <h3>Board of Directors</h3>
                        <h3>Clinics & Hospitals</h3>
                        <h3>Our History</h3>
                        <h3>News & Media</h3>
                    </div>
                </div>
                <div className="box1 footer_box">
                    <div className="title">MEDICAL SERVICES</div>
                    <div className="content">
                        <h3>Cancer Care</h3>
                        <h3>Health Care</h3>
                        <h3>Orthopedic Care</h3>
                        <h3>Women's Care</h3>
                        <h3>Emergency Services</h3>
                        <h3>Urgent Care</h3>
                    </div>
                </div>
                <div className="box1 footer_box">
                    <div className="title">PATIENTS & VISITORS</div>
                    <div className="content">
                        <h3>Advance Care Planning</h3>
                        <h3>Billing & Insurance</h3>
                        <h3>Medical Billing Request </h3>
                        <h3>Pharmacy</h3>
                        <h3>Patient Education</h3>
                        <h3>Web Nursery</h3>
                    </div>
                </div>
                <div className="box1 footer_box">
                    <div className="title">FOLLOW US</div>

                    <div className="socials">
                        <FaTwitter /><FaFacebookF /> <FaGooglePlus /> <FaBaseballBall /> <FaBehance />
                    </div>

                    <div className="title">SUBSCRIBE US</div>
                    <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, explicabo.</h4>
                    <div className="submit">
                        <input type="text" className="email" id='email' placeholder='Email' />
                        <button type="submit"><FaArrowRight /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
