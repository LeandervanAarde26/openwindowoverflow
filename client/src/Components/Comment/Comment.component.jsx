/* React */
import React from 'react';

/* Styling */
import styles from "./Comment.module.scss";

/* Components */
import Icon from '../Icon/Icon';

/* Icons/Images */
import ic_flag from '../../Assets/Icons/ic_flag.svg';

const Comment = ({comment, auth, date}) => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Icon
                    icon={ic_flag}
                />
            </div>
            <div className={styles.right}>
                <h5 className={styles.name}>{auth}</h5>
                <p className={styles.time}>{date}</p>
                <p className={styles.comment}>
                    {comment}
                </p>
            </div>
        </div>
    );
};

export default Comment;