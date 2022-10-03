import React from 'react';
import styles from "./Answers.module.scss";
import Icon from '../Icon/Icon';
import ic_arrow from "../../Assets/Icons/ic_arrow.svg"

const Answers = () => {
    return (
        <div className={styles.outer}>
            <div className={styles.votingContainer}>
                <Icon
                    icon={ic_arrow}
                />
                <h5>12</h5>
                <Icon
                    icon={ic_arrow}
                />
            </div>
            <div className={styles.questionContainer}>
                <p className={styles.userInformation}>Leander van Aarde</p>
                <p className={styles.userInformation}>Answered 29 October 2022 at 12:19</p>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum blandit in odio elementum. Enim amet lorem tellus ultricies egestas etiam in. Dictumst accumsan nec sed ut felis diam gravida nam sed. Porta sociis augue rhoncus ante porta cursus nulla. Habitasse et scelerisque vitae vestibulum elit tortor. Imperdiet viverra mauris, facilisi sed leo congue sed. Gravida ut aliquet eget viverra sed sem quis pellentesque.
                </p>
            </div>
        </div>
    );
};

export default Answers;