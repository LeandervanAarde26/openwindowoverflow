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

const IndividualQuestion = ({ votes, title, author, date, description, code, image, upVoteClick, downVoteClick, upVoted, downVoted }) => {

    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                <div className={styles.voting}>
                    <Icon
                        icon={ic_arrow}
                        onClick={upVoteClick}
                        className={upVoted && styles.upVote}
                        />
                    <h5>{votes}</h5>
                    <Icon
                        icon={ic_arrow}
                        onClick={downVoteClick}
                        className={downVoted && styles.downVote}
                    />
                </div>
                <div className={styles.question}>
                    <h3>{title}</h3>
                    <p className={styles.userInformation}>{author}</p>
                    <p className={styles.userInformation}>Asked {date}</p>
                    <pre className={styles.description}>
                        {description}
                    </pre>
                </div>
            </div>
            <div className={styles.code}>
                <CodePreview children={code} />

            </div>
            <div className={styles.imageContainer}>
                <img src={image} />
            </div>
        </div>
    );
};

export default IndividualQuestion;