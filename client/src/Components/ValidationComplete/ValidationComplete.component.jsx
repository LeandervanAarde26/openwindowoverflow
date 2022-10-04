import React from 'react';
import styles from './ValidationComplete.module.scss';
import Button from '../Button/Button.component'

const ValidationComplete = () => {

    return (
        <div className={styles.container}>
            <h5>Your answer</h5>
            <div className={styles.icons}>
                {/* <Icon 
                icon={bold}
                /> */}
            </div>

                <div className={styles.information}>
                </div>

            <div className={styles.button}>
                <Button
                    buttonType={'primary'}
                    children={"Post answer"}
                />
            </div>
        </div>
    );
};

export default ValidationComplete;