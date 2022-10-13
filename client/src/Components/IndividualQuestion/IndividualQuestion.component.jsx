/* React */
import React from 'react';

/* Styling */
import styles from "./IndividualQuestion.module.scss";

/* Components */
import Icon from '../Icon/Icon';
import RightContainer from '../RightContainer/RightContainer.component';

/* Icons/Images */
import ic_arrow from "../../Assets/Icons/ic_arrow.svg"

const IndividualQuestion = ({children}) => {
    return (
        <div className={styles.container}>
            <div className={styles.voting}>
                <Icon
                    icon={ic_arrow}
                />
                <h5>12</h5>
                <Icon
                    icon={ic_arrow}
                />
            </div>
            <div className={styles.question}>
                <h3>How to use the JQuery something function correctly something something somethign</h3>
                <p className={styles.userInformation}>Leander van Aarde</p>
                <p className={styles.userInformation}>Asked 29 October 2022 at 12:19</p>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum blandit in odio elementum. Enim amet lorem tellus ultricies egestas etiam in. Dictumst accumsan nec sed ut felis diam gravida nam sed. Porta sociis augue rhoncus ante porta cursus nulla. Habitasse et scelerisque vitae vestibulum elit tortor. Imperdiet viverra mauris, facilisi sed leo congue sed. Gravida ut aliquet eget viverra sed sem quis pellentesque.
                </p>
            </div>
        </div>
    );
};

export default IndividualQuestion;