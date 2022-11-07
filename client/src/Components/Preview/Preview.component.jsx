import styles from "./Preview.module.scss";

/* Components */
import Tags from '../Tags/Tags.component';
import Icon from '../Icon/Icon';

/* Icons/Images */
import ic_votes from '../../Assets/Icons/ic_clipboard.svg';
import ic_answers from '../../Assets/Icons/ic_checkmark.svg';
import ic_correct from '../../Assets/Icons/ic_correct.svg';
import ic_star from '../../Assets/Icons/ic_star.svg';
import { useEffect } from "react";

const Preview = ({ title, date, tags, timePassed, user, resolved, answers, votes, goodQuestion, askTime, question, id, nav, userImage }) => {

    return (
        <div 
            className={styles.container}  
            onClick={nav} 
        >
            <div className={styles.left}>
                <div>
                    <Icon
                        icon={ic_votes}
                    />

                    <h5>{votes} votes</h5>
                </div>
                <div>
                    <Icon
                        icon={ic_answers}
                    />

                    <h5>{answers} answers</h5>
                </div>
                {
                    resolved
                    &&
                    <div>
                        <Icon
                            icon={ic_correct}
                        />

                        <h5>Resolved</h5>
                    </div>
                }
            </div>

            <div className={styles.right}>
                <div className={styles.heading}>
                    <h4>{title}</h4>

                    {
                        goodQuestion
                        &&
                        <div className={styles.heading__sub}>
                            <Icon
                                icon={ic_star}
                            />
                            <p>Good question</p>
                        </div>
                    }
                </div>

                <div className={styles.tagsContainer}>
                    {
                        tags.map((i, index) =>
                            <Tags
                                key={index}
                                title={i}
                            />
                        )
                    }
                </div>

                <div className={styles.profileContainer}>
                    <img
                        src={userImage}
                        alt=""
                    />
                    <p className={styles.name}>
                        <strong>{user}</strong>&nbsp;asked question {
                            date
                        }
                    </p>
                </div>

                <p className={styles.description}>
                    {question}
                </p>
                <p className={styles.answeringUser}>
                    {
                        resolved &&
                        <>
                            <strong>{user}</strong>&nbsp;answered question  {
                                timePassed
                            }
                        </>
                    }
                </p>
            </div>
        </div>
    );
};

export default Preview;