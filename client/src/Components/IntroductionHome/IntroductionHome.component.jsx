import React from 'react';
import styles from './IntroductionHome.module.scss';


const IntroductionHome = () => {

    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                <h4>Welcome NAME to Stack Openflow</h4>
                <p>Let's get started on your coding Journey for today! Take a look at some of these questions!</p>
            </div>            
        </div>
    );
};

export default IntroductionHome;