import React, {useState} from "react"
import styles from "./ButtonNavigation.module.css"
import cn from "classnames"
import {Link} from "react-scroll"

const ButtonNavigation = () => {
    const [visible, setVisible] = useState(false)

    const onOpenHandler = () => setVisible(true)
    const onCloseHandler = () => setVisible(false)

    return (
        <>
            <div className={styles.buttonNavigation}>
                <button onClick={onOpenHandler}>
                    <div />
                    <div />
                    <div />
                </button>
            </div>
            <div className={cn(styles.draw, {[styles.open]: visible})}>
                <div className={styles.close} onClick={onCloseHandler} />
                <ol className={styles.navigation}>
                    <Link to="about-us" activeClass={styles.active} className={styles.item} smooth spy>
                        About us
                    </Link>
                    <Link to="out-mission" activeClass={styles.active} className={styles.item} smooth spy>
                        Our Mission
                    </Link>
                    <Link to="services" activeClass={styles.active} className={styles.item} smooth spy>
                        Services
                    </Link>
                    <Link to="contact" activeClass={styles.active} className={styles.item} smooth spy>
                        Contact Us
                    </Link>
                </ol>
            </div>
        </>
    )
}

export default ButtonNavigation
