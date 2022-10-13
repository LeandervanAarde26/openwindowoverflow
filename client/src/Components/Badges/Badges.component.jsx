/* React */
import React from "react";
import { useState } from 'react';

/* Styling */
import styles from './Badges.module.scss'

/* Icons/Images */
import test from '../../Assets/Badges/level1.svg';

const Badges = ({image, title, description, ...otherProps}) => {
    return (
        <div 
            className={styles.container} 
            {...otherProps}
        >
            <div className={styles.container__image}>
                <img src={test}/>
            </div>
            <div className={styles.container__badgeTitle}>
                <h4>{title}</h4>
                <p className={styles.badgeDescription}>{description}</p>
            </div>
        </div>
    );
};

export default Badges;