import React from 'react';
import Comment from '../Comment/Comment.component';
import styles from "./CommentsContainer.module.scss";
const CommentsContainer = () => {
    return (
        <>
            <div className={styles.outer}>
            <h3>Comments</h3>
                <div className={styles.container}>
                    <Comment/>
                </div>
            </div>
        </>
    );
};

export default CommentsContainer;