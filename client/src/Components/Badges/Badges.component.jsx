/* React */
import React from "react";
import { useState } from 'react';

/* Styling */
import styles from './Badges.module.scss'

/* Icons/Images */
import test from '../../Assets/Badges/level1.svg';

const Badges = ({image, title, description, ...otherProps}) => {
    const [showDescription, setShowDescription] = useState(false);
    const hoverDesc = () => setShowDescription(true)
    const hideDesc = () => setShowDescription(false)


    return (
        <div onMouseEnter={hoverDesc} onMouseLeave={hideDesc}
            className={styles.container} 
            {...otherProps}
        >
            <div className={styles.container__image}>
                <img src={
                    require(`../../Assets/Badges/${image}`)
                }/>
            </div>
            <div className={styles.container__badgeTitle}>
                <h5>{title}</h5>
                { showDescription ? <p className={styles.badgeDescription}>{description}</p> : null}
            </div>
        </div>
    );
};

export default Badges;