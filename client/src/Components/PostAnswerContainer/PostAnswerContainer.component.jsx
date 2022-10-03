import React from 'react';
import styles from "./PostAnswerContainer.module.scss"
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

