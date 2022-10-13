/* React */
import React from 'react';

/* Styling */
import styles from "./ValidationCompleteContainer.module.scss";

/* Components */
import ValidationComplete from '../ValidationComplete/ValidationComplete.component';

const ValidationCompleteContainer = () => {
    return (
        <div className={styles.outer}>
            <div className={styles.container}>
                <ValidationComplete/>
            </div>
        </div>
    );
};

export default ValidationCompleteContainer;