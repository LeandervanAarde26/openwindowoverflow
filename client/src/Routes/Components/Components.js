import React from 'react';
import Button from '../../Components/Button/Button.component';

import styles from './Components.module.scss'

const Components = () => {
    return (
        <div className={styles.container}>
            <Button
                className={styles.button}
                buttonType={"black"}
                children="hey"
            />
        </div>
    );
};

export default Components;