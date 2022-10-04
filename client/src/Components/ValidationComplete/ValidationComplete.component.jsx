import React from 'react';
import styles from './ValidationComplete.module.scss';
import Button from '../Button/Button.component';

const ValidationComplete = () => {

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h1>Image</h1>
            </div>
            <div className={styles.right}>
            <p>Welcome to the team user! Your account has been verified and you can now ask all the coding experts anything to make your project awesome or something.. This is just a placeholder but you get the point of what Im trying to bring across... I hope. This placeholder image is ugly asf</p>
            <div className={styles.button}>
                <Button
                    buttonType={'secondary'}
                    children={"Sign In"}
                />
            </div>

            </div>
        </div>
    );
};

export default ValidationComplete;