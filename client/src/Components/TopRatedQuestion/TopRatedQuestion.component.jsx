import React from 'react';
import styles from "./TopRatedQuestion.module.scss"

/* Icons */
import ic_votes from '../../Assets/Icons/ic_clipboard.svg';
import ic_answers from '../../Assets/Icons/ic_checkmark.svg';
import ic_correct from '../../Assets/Icons/ic_correct.svg';
import ic_star from '../../Assets/Icons/ic_star.svg';
import ic_checkmark from '../../Assets/Icons/ic_checkmark.svg'

/* Components */
import Icon from '../Icon/Icon';

const TopRatedQuestion = ({heading}) => {

    let timeAsked = "5 hours ago";

    return (

        <div className={styles.container}>
            <div className={styles.votes}>
                <div>
                    <Icon className={styles.noHover} icon={ic_votes} />
                    <p className={styles.counter}>20</p>
                </div>

                <div>
                    <Icon className={styles.noHover}  icon={ic_answers} />
                    <p className={styles.counter}>20</p>
                </div>
            </div>
            
            <div className={styles.content}>
                    <p className={styles.questionText}> Hi there! this will be the question</p>
                    <p className={styles.userName}><b>User</b> <span className={styles.asked}>Asked Question 5 hours ago</span></p>
               
                <div className={styles.questionRating}>
                    <Icon className={styles.noHover}  icon={ic_star} />
                    <p className={styles.goodQuestion}>Good Question</p>
                </div>
            </div>
        </div>
    );
}

export default TopRatedQuestion;