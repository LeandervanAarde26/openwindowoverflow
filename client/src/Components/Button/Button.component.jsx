import React from 'react';
import styles from './Button.module.scss';
import Discord from '../../Assets/Discord.png'
import Github from '../../Assets/Github.png'

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
        <div className={`${styles.button} ${styles[buttonType]}`} id={`${buttonSize}`} {...otherProps}>
            {
                buttonType == 'discord'
                ?   <>
                        <img src={Discord}
                            style={{ height: 50 }} />
                        <p>Join the Discord</p>
                    </>
                : buttonType == 'github'
                ?   <>
                        <img src={Github}
                            style={{ height: 50 }} />
                        <p>View Github</p>
                    </>
                : children
            }
        </div>
    );
};

export default Button;