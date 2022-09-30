import React, { Children } from "react";
import Badges from "../Badges/Badges.component";
import styles from './BadgeContainer.module.scss'



const BadgeContainer = ({children}) => {


    return (
        <div className={styles.main}>
            <div className={styles.title}>
                <h3>Badges</h3>
            </div>
            <div className={styles.badge_row}>
                {children}
            </div>
        </div>
        )
}

export default BadgeContainer;