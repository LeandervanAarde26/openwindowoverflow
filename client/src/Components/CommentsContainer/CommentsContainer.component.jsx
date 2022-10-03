import React from 'react';
import Comment from '../Comment/Comment.component';
import styles from "./CommentsContainer.module.scss";
import Button from '../Button/Button.component';

const CommentsContainer = ({children, loadMore,}) => {
    return (
        <div className={styles.outer}>
            <h4>Comments</h4>
            <div className={styles.container}>
                {children}

                <div className={styles.buttonContainer}>
                    <Button
                        buttonType={"outline"}
                        children={"View more comments"} 
                        onClick={loadMore}
                    />
                </div>
            </div>
        </div>
    );
};

export default CommentsContainer;