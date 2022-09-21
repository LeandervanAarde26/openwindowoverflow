import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./NavigationButton.module.scss"

const NavigationButton = (props, { active, children,activeClass, ...otherProps }) => {

    return (
        <NavLink 
            to={props.route}
            className={({isActive}) => isActive ? styles.active : styles.buttonContainer}  
        >
            {props.label}
        </NavLink>
    );
};

export default NavigationButton;