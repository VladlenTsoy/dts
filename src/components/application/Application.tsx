import React from "react"
import styles from "./Application.module.css"
import CheckboxGroup from "./CheckboxGroup"

const Application = () => {
    return (
        <div className={styles.application}>
            <h2>Owner operator / Driver application for</h2>
            <button>apply now</button>
            <div className={styles.info}>
                <img src="/images/application-icon.svg" alt="contact" width={30} height={38} />
                <h4>Contract</h4>
                <div>
                    In compliance with Federal and State equal employment opportunity laws, qualified applicants are
                    considered for all positions without regard to race, color, religion, sex, national origin, age,
                    marital status, genetic characteristic, or disability.
                </div>
            </div>
            <form className={styles.form}>
                <textarea placeholder="Date of Application" rows={1}/>
                <textarea placeholder="License Number" />
                <textarea placeholder="Full name" />
                <textarea placeholder="License Type" />
                <textarea placeholder="Current Address" />
                <textarea placeholder="License Expiration Date" />
                <CheckboxGroup placeholder="Do you have the legal right to work in the U.S.?"
                               name="1" />
                <CheckboxGroup placeholder="Download you CDL Class A License"
                               name="2" />
                <CheckboxGroup placeholder="Are you over the age of 21?"
                               name="3" />
                <CheckboxGroup
                    placeholder="Have you ever been denied a license, permit or privilege to operate a motor vehicle?"
                    name="4" />
                <textarea placeholder="Current Employer Company name" />
                <CheckboxGroup placeholder="Have any license, permit or privilege ever been suspended or revoked?"
                               name="5" />
                <textarea placeholder="Current Employer Address (please include address, city, state, and zip code)" />
                <textarea placeholder="Show special courses or training that will help you as a driver" />
                <textarea placeholder="Current Employer Contact Person and Phone Number" />
                <textarea placeholder="What other trucking, transportation or other experience do you have?" />
                <textarea placeholder="Accident Record for Past 3 Years or More" />
                <textarea placeholder="List special equipment or technical materials you can work with" />
                <textarea placeholder="Traffic Conviction Record for Past 3 Years or More" />
                <textarea placeholder="Provide Us with Your Vehicle Information" />
                <textarea
                    placeholder="List any job related classes or programs you completed, and the dates you attended" />
                <textarea placeholder="Your Email" />
                <textarea placeholder="State Drive License" />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Application
