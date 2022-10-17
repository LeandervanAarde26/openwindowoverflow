import React from 'react';
import styles from "./IntroductionHomeContainer.module.scss"
import IntroductionHome from '../IntroductionHome/IntroductionHome.component';

const IntroductionHomeContainer = () => {
    

    return (
            <div className={styles.container}>
                    <IntroductionHome/>
            </div>
    );
};

export default IntroductionHomeContainer;

