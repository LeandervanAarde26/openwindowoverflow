/* React */
import React from 'react';

/* Styling */
import styles from "./UserReputation.module.scss";

const UserReputation = () => {
    return (
        <div className={styles.container}>
            
            <div className={styles.headingCon}>
            <h4>User Reputation</h4>
            <h1>55%</h1>
            </div>

        </div>
    );
};

export default UserReputation;