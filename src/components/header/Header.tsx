import React from "react"
import styles from "./Header.module.css"
import {Link} from "react-scroll"
import ButtonNavigation from "./ButtonNavigation"

const Header = () => {
    return (
        <div className={styles.header}>
            <img src="/images/logo.svg" alt="DTS" width="247" height="82" />
            <ButtonNavigation />
            <ol className={styles.navigation}>
                <li>
                    <Link to="about-us" smooth>About Us</Link>
                </li>
                <li>
                    <Link to="out-mission" smooth>Our Mission</Link>
                </li>
                <li>
                    <Link to="services" smooth>Services</Link>
                </li>
                <li>
                    <Link to="contact" smooth>Contact</Link>
                </li>
            </ol>
        </div>
    )
}

export default Header
