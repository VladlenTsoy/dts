import React, {useRef, useState} from "react"
import styles from "./Application.module.css"
import CheckboxGroup from "./CheckboxGroup"
import axios from "axios"

const Application = () => {
    const ref = useRef<any>()
    const [loading, setLoading] = useState(false)
    const [visible, setVisible] = useState(false)
    const [visibleMessage, setVisibleMessage] = useState(false)
    //
    const serializeForm = () => {
        const obj = {}
        const formData = new FormData(ref.current)
        // @ts-ignore
        for (const key of formData.keys()) {
            // @ts-ignore
            obj[key] = formData.get(key)
        }
        return obj
    }
    //
    const onHandler = () => setVisible(prevState => !prevState)
    //
    const onSubmitHandler = async (e: any) => {
        e.preventDefault()
        setLoading(true)
        const body = serializeForm()
        const response = await axios.post("https://api.dtsincorporated.com/dts", body)
        // const response = await axios.post("http://localhost:8000/dts", body)
        setLoading(false)
        if (response.status) {
            setVisible(false)
            setVisibleMessage(true)
        }
    }

    return (
        <div className={styles.application}>
            <h2>Owner operator / Driver application for</h2>
            <button onClick={onHandler}>apply now</button>
            {visibleMessage && <div className={styles.message}>
                You have successfully submitted your application. You will be contacted shortly!
            </div>}
            {
                visible &&
                <div>
                    <div className={styles.info}>
                        <img src="/images/application-icon.svg" alt="contact" width={30} height={38} />
                        <h4>Contract</h4>
                        <div>
                            In compliance with Federal and State equal employment opportunity laws, qualified applicants
                            are
                            considered for all positions without regard to race, color, religion, sex, national origin,
                            age,
                            marital status, genetic characteristic, or disability.
                        </div>
                    </div>
                    <form className={styles.form} onSubmit={onSubmitHandler} ref={ref}>
                        {loading &&
                            <div className={styles.loading}>
                                <h1>Sending...</h1>
                            </div>
                        }
                        <textarea placeholder="Full name" name="full_name" required />
                        <textarea placeholder="License Number" name="license_number" required />
                        <textarea placeholder="Mobile Number#" name="mobile_number" rows={1} required />
                        <textarea placeholder="License Type" name="license_type" required />
                        <textarea placeholder="Current Address" name="current_address" required />
                        <textarea placeholder="License Expiration Date" name="license_expiration_date" required />
                        <CheckboxGroup placeholder="Do you have the legal right to work in the U.S.?"
                                       name="1" />
                        <CheckboxGroup placeholder="Download you CDL Class A License"
                                       name="2" />
                        <CheckboxGroup placeholder="Are you over the age of 21?"
                                       name="3" />
                        <CheckboxGroup
                            placeholder="Have you ever been denied a license, permit or privilege to operate a motor vehicle?"
                            name="4" />
                        <textarea placeholder="Current Employer Company name" name="current_employer_company"
                                  required />
                        <CheckboxGroup
                            placeholder="Have any license, permit or privilege ever been suspended or revoked?"
                            name="5" />
                        <textarea
                            placeholder="Current Employer Address (please include address, city, state, and zip code)"
                            name="current_employer_address"
                            required />
                        <textarea placeholder="Show special courses or training that will help you as a driver"
                                  name="special_courses"
                                  required />
                        <textarea placeholder="Current Employer Contact Person and Phone Number"
                                  name="current_employer_contact" required />
                        <textarea placeholder="What other trucking, transportation or other experience do you have?"
                                  name="other_trucking" required />
                        <textarea placeholder="Accident Record for Past 3 Years or More" name="accident_record"
                                  required />
                        <textarea placeholder="List special equipment or technical materials you can work with"
                                  name="special_equipment" required />
                        <textarea placeholder="Traffic Conviction Record for Past 3 Years or More"
                                  name="traffic_conviction_record" required />
                        <textarea placeholder="Provide Us with Your Vehicle Information"
                                  name="vehicle_information" required />
                        <textarea
                            placeholder="List any job related classes or programs you completed, and the dates you attended"
                            name="job_related_classes" required />
                        <textarea name="your_email" placeholder="Your Email" required />
                        <textarea name="state_drive_license" placeholder="State Drive License" required />
                        <button type="submit" disabled={loading}>{loading ? "Sending..." : "Submit"}</button>
                    </form>
                </div>
            }
        </div>
    )
}

export default Application
