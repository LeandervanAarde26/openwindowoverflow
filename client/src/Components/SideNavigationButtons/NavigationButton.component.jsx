import React from 'react';


const NavigationButton = ({ active, children,activeClass, ...otherProps }) => {

    return (
        <div className={`${activeClass}`}  {...otherProps}>
            {children}
        </div>
    );
};

export default NavigationButton;