import React from 'react';
import IndividualQuestion from '../../Components/IndividualQuestion/IndividualQuestion.component';
import SideNavigation from '../../Components/sideNavigation/SideNavigation.component';
import styles from "./Question.module.scss";

const Question = () => {
    return (
        <div className={styles.container}>
            <SideNavigation />
            <IndividualQuestion />
        </div>
    );
};

export default Question;