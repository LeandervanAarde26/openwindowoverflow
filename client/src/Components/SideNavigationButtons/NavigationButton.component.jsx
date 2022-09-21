import React from 'react';


const NavigationButton = ({ active, children,activeClass, ...otherProps }) => {

    console.log(activeClass)
    return (
        <div className={`${activeClass}`}  {...otherProps}>
            {children}
        </div>
    );
};

export default NavigationButton;