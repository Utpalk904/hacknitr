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
                        <h4>About us</h4>
                        <h4>Award & Achievements</h4>
                        <h4>Board of Directors</h4>
                        <h4>Clinics & Hospitals</h4>
                        <h4>Our History</h4>
                        <h4>News & Media</h4>
                    </div>
                </div>
                <div className="box1 footer_box">
                    <div className="title">MEDICAL SERVICES</div>
                    <div className="content">
                        <h4>Cancer Care</h4>
                        <h4>Health Care</h4>
                        <h4>Orthopedic Care</h4>
                        <h4>Women's Care</h4>
                        <h4>Emergency Services</h4>
                        <h4>Urgent Care</h4>
                    </div>
                </div>
                <div className="box1 footer_box">
                    <div className="title">PATIENTS & VISITORS</div>
                    <div className="content">
                        <h4>Advance Care Planning</h4>
                        <h4>Billing & Insurance</h4>
                        <h4>Medical Billing Request </h4>
                        <h4>Pharmacy</h4>
                        <h4>Patient Education</h4>
                        <h4>Web Nursery</h4>
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
                        <input type="email" className="email" id='email' placeholder='Email' />
                        <button type="submit"><FaArrowRight /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
