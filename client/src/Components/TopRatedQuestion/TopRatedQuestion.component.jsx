import React from 'react';
import styles from "./TopRatedQuestion.module.scss"

/* Icons */
import ic_votes from '../../Assets/Icons/ic_clipboard.svg';
import ic_answers from '../../Assets/Icons/ic_checkmark.svg';
import ic_correct from '../../Assets/Icons/ic_correct.svg';
import ic_star from '../../Assets/Icons/ic_star.svg';
import ic_checkmark from '../../Assets/Icons/ic_checkmark.svg'
import { useNavigate } from 'react-router';

/* Components */
import Icon from '../Icon/Icon';

const TopRatedQuestion = ({ heading, votes, answers, username, goodQuestion, date, nav }) => {

    const navigate = useNavigate();
    return (

        <div className={styles.container} onClick={() => navigate(`/Question/${nav}`)}>
            <div className={styles.votes}>
                <div>
                    <Icon className={styles.noHover} icon={ic_votes} />
                    <p className={styles.counter}>{votes}</p>
                </div>

                <div>
                    <Icon className={styles.noHover} icon={ic_answers} />
                    <p className={styles.counter}>{answers}</p>
                </div>
            </div>

            <div className={styles.content}>
                <p className={styles.questionText}> <b>{heading}</b></p>
                <p className={styles.userName}><b>{username}</b> <span className={styles.asked}> asked {date}</span></p>

                {
                    goodQuestion &&
                    <div className={styles.questionRating}>
                        <Icon className={styles.noHover} icon={ic_star} />
                        <p className={styles.goodQuestion}>Good Question</p>
                    </div>
                }
            </div>
        </div>
    );
}

export default TopRatedQuestion;