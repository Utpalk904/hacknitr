import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import '../Css/Home.css';
import Service from '../Components/Service';
import { RiLungsLine } from 'react-icons/ri';
import { GiHeartBeats } from 'react-icons/gi';
import { SlUserFemale } from 'react-icons/sl';
import { BsEye } from 'react-icons/bs';
import { TbDental } from 'react-icons/tb';
import { GiHumanEar } from 'react-icons/gi';


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
                        <Link to='/appointment' className='shop-now'>Book Appointment</Link>
                    </div>
                </div>
            </div>
            <div className="service-section">
                <h1>Our Services</h1>
                <div className="all-services">
                    <Service serviceIcon={<RiLungsLine/>} serviceName='Pulmonary' serviceDesc='Pulmonary means of or relating to the lungs. A pulmonary specialist is a doctor who treats lung problems.'/>
                    <Service serviceIcon={<GiHeartBeats/>} serviceName='Cardiology' serviceDesc='Cardiology is a branch of medicine that deals with disorders of the heart and the cardiovascular system.'/>
                    <Service serviceIcon={<SlUserFemale/>} serviceName='Cosmetic Solutions' serviceDesc='Cosmetics are mixtures of chemical compounds from natural sources or from synthetic sources.'/>
                    <Service serviceIcon={<BsEye/>} serviceName='Eye' serviceDesc='Laser vision surgery is a popular treatment for vision problems. It can reduce or eliminate the need for eyeglasses or contact lenses.'/>
                    <Service serviceIcon={<TbDental/>} serviceName='Dental Care' serviceDesc='Dentistry, also known as dental medicine and oral medicine, is the branch of medicine focused on the teeth, gums, and mouth. '/>
                    <Service serviceIcon={<GiHumanEar/>} serviceName='Ear Treatment' serviceDesc='An ear is the organ that enables hearing and, in mammals, body balance using the vestibular system.'/>
                </div>
            </div>
        </div>
    );
}

export default Home;