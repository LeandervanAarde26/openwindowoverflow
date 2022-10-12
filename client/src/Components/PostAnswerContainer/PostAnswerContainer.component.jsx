/* React */
import React from 'react';

/* Styling */
import styles from "./PostAnswerContainer.module.scss"

/* Components */
import PostAnswer from '../PostAnswer/PostAnswer.component';

const PostAnswerContainer = () => {
    return (
        <div className={styles.outer}>
            <div className={styles.container}>
                <PostAnswer/>
            </div>
        </div>
    );
};

export default PostAnswerContainer;

