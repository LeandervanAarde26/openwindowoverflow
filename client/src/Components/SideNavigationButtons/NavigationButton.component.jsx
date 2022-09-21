import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./NavigationButton.module.scss"

const NavigationButton = ({route, active, children,activeClass,label, ...otherProps }) => {

    return (
        <NavLink 
            to={route}
            className={({isActive}) => isActive ? styles.active : styles.buttonContainer}  
        >
            {label}
        </NavLink>
    );
};

export default NavigationButton;