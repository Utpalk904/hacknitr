import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import '../Css/Home.css';

const Home = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div>
            <div className="home-frame">
                <div className="home-frame-content" data-aos="zoom-in-right">
                    <div className="line1">Lorem ipsum dolor sit amet.</div>
                    <div className="line2">Exclusive Medical Care</div>
                    <div className="line4">
                        <Link to='/products' className='shop-now'>Book Appointment</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;