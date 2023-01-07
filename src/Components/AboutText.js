import styles from "../Css/AboutText.module.css"
import {FaHome, FaAngleRight} from "react-icons/fa"
import AboutDoctors from "./AboutDoctors";

function AboutText() {
    return ( 
        <div className={styles.container}>
            <div className={styles.left}>
                <p style={{width:"70%", padding:"5px 10px", border:"1px solid #888"}}><FaHome/> <FaAngleRight/> About</p>
                <div className={styles.about}>
                    <h1>DocCare Healthcare</h1>
                    <p style={{margin:"0 0 15px 0",padding:"0 0 10px 0"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                    </p>
                    <p style={{margin:"0 0 15px 0",padding:"0 0 10px 0"}}>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    </p>
                    <div className={styles.services}>
                        <div className={styles.listsec}>
                            <p>Services</p>
                            <div className={styles.list}>
                                <div>
                                <span><FaAngleRight/>General and Preventive Care</span>
                                <span><FaAngleRight/>Cosmetic Solutions</span>
                                <span><FaAngleRight/>Restorative Solution</span>
                                <span><FaAngleRight/>Additional Treatments</span>
                                </div>
                                <div>
                                <span><FaAngleRight/>Orthodontics</span>
                                <span><FaAngleRight/>Dentures & Denture</span>
                                <span><FaAngleRight/>Diagnostic & Preventive</span>
                                <span><FaAngleRight/>Pediatric Dentistry</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.image}></div>
                    </div>
                </div>
                <AboutDoctors/>
            </div>
            {/* <div className={styles.right}>
                <div className={styles.timings}>
                    <h4>Opening Hours</h4>
                    <div className={styles.hours}>
                        <span>Monday-Friday: 9am-6pm</span>
                        <span>Saturday: 10am-1pm</span>
                        <span>Sunday: 10am-1pm</span>
                    </div>
                </div>
            </div> */}
        </div>
     );
}

export default AboutText;