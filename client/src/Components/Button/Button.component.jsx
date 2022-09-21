import React from 'react';
import "./Button.styles.scss";

const buttonTypes = {
    primary: 'primary',
    secondary: 'secondary',
    discord: 'discord',
    outline: 'outline',
    black: 'black',
    github: 'github',
}

const Button = ({children, buttonType, buttonSize, ...otherProps}) => {
    return (
        <div className={`button ${buttonTypes[buttonType]}`} id={`${buttonSize}`} {...otherProps}>
            {children}
        </div>
    );
};

export default Button;