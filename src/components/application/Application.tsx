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
                <input placeholder="Date of Application" />
                <input placeholder="License Number" />
                <input placeholder="Full name" />
                <input placeholder="License Type" />
                <input placeholder="Current Address" />
                <input placeholder="License Expiration Date" />
                <CheckboxGroup placeholder="Do you have the legal right to work in the U.S.?"
                               name="1" />
                <CheckboxGroup placeholder="Download you CDL Class A License"
                               name="2" />
                <CheckboxGroup placeholder="Are you over the age of 21?"
                               name="3" />
                <CheckboxGroup
                    placeholder="Have you ever been denied a license, permit or privilege to operate a motor vehicle?"
                    name="4" />
                <input placeholder="Current Employer Company name" />
                <CheckboxGroup placeholder="Have any license, permit or privilege ever been suspended or revoked?"
                               name="5" />
                <input placeholder="Current Employer Address (please include address, city, state, and zip code)" />
                <input placeholder="Show special courses or training that will help you as a driver" />
                <input placeholder="Current Employer Contact Person and Phone Number" />
                <input placeholder="What other trucking, transportation or other experience do you have?" />
                <input placeholder="Accident Record for Past 3 Years or More" />
                <input placeholder="List special equipment or technical materials you can work with" />
                <input placeholder="Traffic Conviction Record for Past 3 Years or More" />
                <input placeholder="Provide Us with Your Vehicle Information" />
                <input
                    placeholder="List any job related classes or programs you completed, and the dates you attended" />
                <input placeholder="Your Email" />
                <input placeholder="State Drive License" />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Application
