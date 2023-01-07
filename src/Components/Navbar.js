import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../Css/Navbar.css';
import Logo from '../Assets/logo.png';

import { GrFacebookOption } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { GrGooglePlus } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";

import { BiMenuAltLeft } from 'react-icons/bi';

import { FiPhoneCall } from 'react-icons/fi';

import { VscAccount } from 'react-icons/vsc';

import { CgClose } from 'react-icons/cg';

import { FiClock } from 'react-icons/fi';

const Navbar = () => {

    const [mobileMenu, setMobileMenu] = useState('mobile-menu-close');

    const logOutHandler = () => {
        localStorage.clear()
        window.location="/"
    }

    return (

        <header>
            <div className="topbar">
                <div className="topbar-logo">
                        <img src={Logo} alt="topbar-logo" />
                </div>
                <div className="topbar-right">
                    <div className="call">
                        <span className="call-icon"><FiPhoneCall/></span>
                        <span className="number">
                            <div className="num-line1">Call Today:</div>
                            <div className="num-line2"><a href='tel:+918700255519'>+91 8700255519</a></div>
                        </span>
                    </div>
                    <div className="open-timing">
                        <span className="time-icon"><FiClock/></span>
                        <span className="timing">
                            <div className="time-line1">Opening Hours:</div>
                            <div className="time-line2">Mon-Fri: 9am-6pm;<br/>Sat-Sun: 10am-1pm</div>
                        </span>
                    </div>
                </div>
            </div>
            <nav>
                <div className="nav-left">
                    <div className="menu-icon" onClick={() => { setMobileMenu('mobile-menu') }}>
                        <BiMenuAltLeft />
                    </div>
                    <div className="social-icons">
                        <span className="facebook social"><GrFacebookOption /></span>
                        <span className="twitter social"><GrTwitter /></span>
                        <span className="google social"><GrGooglePlus /></span>
                        <span className="instagram social"><GrInstagram /></span>
                    </div>
                </div>
                <div className="nav-middle">
                    <div className="nav-links">
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/user/login'>User Login</Link></li>
                            <li><Link to='/doctor/login'>Doctor Login</Link></li>
                            <li><Link to='/contact-us'>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="nav-logo">
                        <img src={Logo} alt="nav-logo" />
                    </div>
                </div>
                <div className="nav-right">
                    <span className="account" onClick={() => logOutHandler()}>Logout</span>
                </div>
            </nav>
            <div className={mobileMenu}>
                <div className="close-icon" onClick={() => { setMobileMenu('mobile-menu-close') }}><CgClose /></div>
                <div className="column-menu">
                    <div className="mobile-logo">
                        <img src={Logo} alt="nav-logo" />
                    </div>
                    <div className="mobile-menu-links">
                        <ul>
                            <li onClick={() => { setMobileMenu('mobile-menu-close') }}><Link to='/'>Home</Link></li>
                            <li onClick={() => { setMobileMenu('mobile-menu-close') }}><Link to='/products'>About</Link></li>
                            <li onClick={() => { setMobileMenu('mobile-menu-close') }}><Link to='/products'>Services</Link></li>
                            <li onClick={() => { setMobileMenu('mobile-menu-close') }}><Link to='/doctor-list'>Our Professionals</Link></li>
                            <li onClick={() => { setMobileMenu('mobile-menu-close') }}><Link to='/contact-us'>Contact</Link></li>
                            <li onClick={() => { setMobileMenu('mobile-menu-close') }}><Link to='/login'>Login</Link></li>
                            <li onClick={() => { setMobileMenu('mobile-menu-close') }}><Link to='/register'>Register</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header >
    );
}

export default Navbar;