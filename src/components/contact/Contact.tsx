import React from "react"
import styles from "./Contact.module.css"
import {Element} from "react-scroll"

const Contact = () => {
    return (
        <Element name="contact" className={styles.contact}>
            <div className={styles.map}>
            </div>
            <div className={styles.content}>
                <h2>Contact</h2>
                <div className={styles.iconText}>
                    <img src="/images/contact-location.svg" alt="Get in touch" width={32} height={37} />
                    <h4>Get in touch</h4>
                </div>
                <div className={styles.info}>
                    <div>
                        Phones:
                    </div>
                    <div>
                        916 860 1100 <br />
                        800 327 8500
                    </div>
                    <div>
                        Fax:
                    </div>
                    <div>
                        916 860 1166
                    </div>
                    <div>
                        Email:
                    </div>
                    <div>
                        sales@dtsincorporated.com
                    </div>
                    <div>
                        Address:
                    </div>
                    <div>
                        3807 Pasadena Ave. Suite 112<br />
                        Sacramento CA, 95821
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default Contact
