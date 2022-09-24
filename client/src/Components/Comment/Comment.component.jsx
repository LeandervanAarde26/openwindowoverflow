import React from 'react';
import styles from "./Comment.module.scss";
import Icon from '../Icon/Icon';
import ic_answers from '../../Assets/Icons/ic_checkmark.svg';
const Comment = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
            <Icon
                        icon={ic_answers}
                    />
            </div>
            <h3>Person</h3>
            <p>Question text goes here</p>
        </div>
    );
};

export default Comment;