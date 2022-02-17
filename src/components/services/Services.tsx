import React from "react"
import styles from "./Services.module.css"

const Services = () => {
    return (
        <div className={styles.services}>
            <div className={styles.title}>
                <h2>Services</h2>
                <p>
                    DTS Inc provides a full spectrum of services,<br />
                    which extends beyond freight booking.
                </p>
            </div>
            <div className={styles.grid}>
                <div className={styles.item}>
                    <div className={styles.head}>
                        <img src="/images/services/service-1.svg" alt="Grow your Business with us!"
                             width="39" height="38" />
                        <h4>
                            Grow your Business<br />
                            with us!
                        </h4>
                    </div>
                    <div className="text">
                        You will grow your business on your own terms. You decide what to haul, when to haul and when to
                        return home. Success is a journey, not a destination. We are committed to your success and we
                        will
                        guide you all the way.
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.head}>
                        <img src="/images/services/service-2.svg" alt="Partnershipwith us!"
                             width="39" height="39" />
                        <h4>
                            Partnership<br />
                            with us!
                        </h4>
                    </div>
                    <div className="text">
                        If you are a fleet owner and want to run under your own MC and DOT, our safety department will
                        get you ready for your annual US DOT Inspection.
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.head}>
                        <img src="/images/services/service-3.svg" alt="Organized paperwork"
                             width="38" height="30" />
                        <h4>
                            Organized<br />
                            paperwork
                        </h4>
                    </div>
                    <div className="text">
                        Our team will handle all your paperwork such as set-up package, billing, invoicing, factoring,
                        etc. To keep the process fully transparent, you’ll be copied in all communications. We always
                        provide original confirmation of every load booked!
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.head}>
                        <img src="/images/services/service-4.svg" alt="Reliable Dispatch and Safety Departments"
                             width="38" height="39" />
                        <h4>
                            Reliable Dispatch<br />
                            and Safety Departments
                        </h4>
                    </div>
                    <div className="text">
                        Our team will handle all your paperwork such as set-up package, billing, invoicing, factoring,
                        etc. To keep the process fully transparent, you’ll be copied in all communications. We always
                        provide original confirmation of every load booked!
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.head}>
                        <img src="/images/services/service-5.svg" alt="IFTA / Permits Fuel Card"
                             width="32" height="39" />
                        <h4>
                            IFTA / Permits<br />
                            Fuel Card
                        </h4>
                    </div>
                    <div className="text">
                        Complete the required trip report and we will prepare your quarterly IFTA, at no cost to you. We
                        also provide OR, NM, KY. NY permits and the best in class fuel card.
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.head}>
                        <img src="/images/services/service-6.svg" alt="Truck devices"
                             width="39" height="39" />
                        <h4>
                            Truck<br />
                            devices
                        </h4>
                    </div>
                    <div className="text">
                        Our company provides ELD, EzPass and PrePass devices. Stop wasting time at weigh stations.
                        Install our PrePass transponder and get the green light at 99% of weigh stations nationwide.
                        Reduce delays at toll booths and start using EzPass.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
