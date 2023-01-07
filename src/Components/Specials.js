import styles from "./Specials.module.css"

function Specials() {
    return ( 
        <div className={styles.container}>
            <img src="teamslider1.jpg"/>
            <div className={styles.main}>
                <div className={styles.text}>
                    <h3>Dr. Blahlah Blah</h3>
                    <span>-- Specializes in tahdahbah</span>
                    <p>"Lorem Ipsum Dolor Sit amet kabet noob abra nieztche
                         Lorem Ipsum Dolor Sit amet kabet noob abra nieztche
                          Lorem Ipsum Dolor Sit amet kabet noob abra nieztche"
                    </p>
                </div>
            </div>
        </div>
     );
}

export default Specials;