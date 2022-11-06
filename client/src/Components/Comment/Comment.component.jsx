/* React */
import React, { useState } from 'react';
import axios from 'axios'
/* Styling */
import styles from "./Comment.module.scss";

/* Components */
import Icon from '../Icon/Icon';

/* Icons/Images */
import ic_flag from '../../Assets/Icons/ic_flag.svg';

const Comment = ({comment, auth, date , authId, id, func, flagged, questionId, clickFlag}) => {
    const user = sessionStorage.getItem("userName")

    return (
        <div className={styles.container}>
            <div className={styles.left} id={id}>
                <Icon
                    className={flagged ? styles.norm : styles.flagged}
                    icon={ic_flag}
                    // onClick={testerFunction}
                    onClick={clickFlag}
                />
            </div>
            <div className={styles.right}>
                <h5 className={styles.name}>{auth === user ? "You" : auth}</h5>
                <p className={styles.time}>{date}</p>
                <p className={styles.comment}>
                    {comment}
                </p>
            </div>
        </div>
    );
};

export default Comment;