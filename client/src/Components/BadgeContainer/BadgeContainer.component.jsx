import React, { Children } from "react";
import Badges from "../Badges/Badges.component";
import styles from './BadgeContainer.module.scss'



const BadgeContainer = ({children}) => {


    return (
        <div className={styles.main}>
                {children}
        </div>
        )
}

export default BadgeContainer;