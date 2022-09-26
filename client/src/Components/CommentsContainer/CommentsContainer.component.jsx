import React from 'react';
import Comment from '../Comment/Comment.component';
import styles from "./CommentsContainer.module.scss";
import Button from '../Button/Button.component';

const CommentsContainer = () => {
    return (

        <div className={styles.outer}>
            <h3>Comments</h3>
            <div className={styles.container}>
                <Comment />
                <Comment />

                <div className={styles.buttonContainer}>
                    <Button
                        buttonType={"outline"}
                        children={"View more comments"} />
                      
                </div>
            </div>
        </div>

    );
};

export default CommentsContainer;