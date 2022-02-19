import React, {useState} from "react"
import styles from "./ChecboxGroup.module.css"
import cn from "classnames"

interface CheckboxGroupProps {
    placeholder: string
    name: string
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({placeholder, name}) => {
    const [value, setValue] = useState("yes")

    return (
        <div className={styles.inputGroup}>
            <div className={styles.placeholder}>
                {placeholder}
            </div>
            <div className={styles.checkboxGroup}>
                <label onClick={() => setValue("yes")}>
                    <div className={cn(styles.checkbox, {[styles.active]: value === "yes"})}>
                        <input type="radio" name={name} value="yes" />
                    </div>
                    <span>Yes</span>
                </label>
                <label onClick={() => setValue("no")}>
                    <div className={cn(styles.checkbox, {[styles.active]: value === "no"})}>
                        <input type="radio" name={name} value="no" />
                    </div>
                    <span>No</span>
                </label>
            </div>
        </div>
    )
}

export default CheckboxGroup
