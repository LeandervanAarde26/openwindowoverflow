/* React */
import React from "react";

/* Styling */
import styles from './BadgeContainer.module.scss'

/* Components */
import Badges from "../Badges/Badges.component";

const BadgeContainer = ({children}) => {
    return (
        <div className={styles.main}>
                {children}
        </div>
    );
};

export default BadgeContainer;