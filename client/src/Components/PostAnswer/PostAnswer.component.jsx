import React from 'react';
import styles from './PostAnswer.module.scss';

const PostAnswer = () => {

    return (
        <div className={styles.container}>
            <h5>Your Answer</h5>
            <div className={styles.icons}>
                <h5>Images go here</h5>
            </div>

                <div className={styles.information}>
                </div>
            <button/>
        </div>
    );
};

export default PostAnswer;