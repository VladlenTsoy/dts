import React from "react"
import styles from "./Header.module.css"
import {Link} from "react-scroll"

const Header = () => {
    return (
        <div className={styles.header}>
            <img src="/images/logo.svg" alt="DTS" width="247" height="82" />
            <ol className={styles.navigation}>
                <li>
                    <Link to="about-us">About Us</Link>
                </li>
                <li>
                    <Link to="out-mission">Our Mission</Link>
                </li>
                <li>
                    <Link to="services">Services</Link>
                </li>
                <li>
                    <Link to="contact">Contact</Link>
                </li>
            </ol>
        </div>
    )
}

export default Header
