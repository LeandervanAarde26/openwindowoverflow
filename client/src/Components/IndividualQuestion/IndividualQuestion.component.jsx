/* React */
import React from 'react';

/* Styling */
import styles from "./IndividualQuestion.module.scss";

/* Components */
import Icon from '../Icon/Icon';
import RightContainer from '../RightContainer/RightContainer.component';
import CodePreview from '../CodePreview/CodePreview.component';

/* Icons/Images */
import ic_arrow from "../../Assets/Icons/ic_arrow.svg"
import tester from "../../Assets/code.png"

const IndividualQuestion = ({ votes, title, author, dt, description, cd, image, }) => {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.inner}>
                    <div className={styles.voting}>
                        <Icon
                            icon={ic_arrow}
                        />
                        <h5>{votes}</h5>
                        <Icon
                            icon={ic_arrow}
                        />
                    </div>
                    <div className={styles.question}>
                        <h3>{title}</h3>
                        <p className={styles.userInformation}>{author}</p>
                        <p className={styles.userInformation}>Asked {dt}</p>
                        <p className={styles.description}>
                            {description}
                        </p>
                    </div>
                </div>
                <div className={styles.code}>
                    <CodePreview children={cd} />

                </div>
                <div className={styles.imageContainer}>
                    <img src={image} />
                </div>
            </div>

        </>
    );
};

export default IndividualQuestion;