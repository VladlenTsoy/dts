import React from "react"
import styles from "./AboutUs.module.css"
import {Element} from "react-scroll"

const AboutUs = () => {
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                <Element name="about-us" className={styles.title}>
                    <h2>About Us</h2>
                    <img src="/images/about-us-arrow.svg" alt="arrow" width="27" height="27" />
                </Element>
                <div className={styles.content}>
                    Dispatch and Transportation Service Inc (DTS Inc) — a company that has been operating in the
                    trucking
                    services market since 2018, whose main focus is to provide hones and professional dispatching
                    services
                    for Owner - operators and drivers. Today, we transport goods across the US. With the support of
                    our
                    professional dispatch team, you will experience trucking like never before. We will handle your
                    administrative burden, while you enjoy the ride. We pledge to provide high quality service and
                    exceed
                    your expectations every day.
                    <br />
                    <br />
                    You will never have to open a load board or call a broker again. We understand the dynamics of
                    the
                    market and know how to negotiate the best rates. Our nationwide network of brokers allows us to
                    offer
                    the highest and steady year-round freight.
                </div>
                <Element name="out-mission" className={styles.title}>
                    <h2>Our mission</h2>
                </Element>
                <div className={styles.content}>
                    Provide first class service with the best prices for everyone who comes to us. We have a proven
                    track
                    record in the trucking industry. Our advantages are excellent customer service, fast delivery,
                    accuracy
                    and reliability.
                </div>
            </div>
            <div className={styles.values}>
                <h3>
                    Our core values:
                </h3>
                <div>
                    <h4>Integrity</h4>
                    <p>We will always do the right thing - honestly, efficiently and reliably - with our drivers, our
                        partners and each other.</p>
                </div>
                <div>
                    <h4>The Spirit of Victory</h4>
                    <p>We have a passion for achieving results.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
