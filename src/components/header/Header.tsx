import React from "react"
import styles from "./Header.module.css"

const Header = () => {
    return (
        <div className={styles.header}>
            <img src="/images/logo.svg" alt="DTS" width="247" height="82" />
            <ol className={styles.navigation}>
                <li>
                    <a href="#about-us">About Us</a>
                </li>
                <li>
                    <a href="#out-mission">Our Mission</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ol>
        </div>
    )
}

export default Header
