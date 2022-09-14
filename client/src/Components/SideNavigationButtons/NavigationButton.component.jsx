import React from 'react';
import styles from "./NavigationButton.module.scss"

const NavigationButton = ({ active, children,activeClass, ...otherProps }) => {

    console.log(activeClass)
    return (
        <div className={`${activeClass}`}  {...otherProps}>
            {children}
        </div>
    );
};

export default NavigationButton;