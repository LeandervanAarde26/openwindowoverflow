/* React */
import React from 'react';

/* Styling */
import styles from "./CommentsContainer.module.scss";

/* Components */
import Comment from '../Comment/Comment.component';
import Button from '../Button/Button.component';

const CommentsContainer = ({ children, loadMore, commentEnd }) => {
    return (
        <div className={styles.outer}>
            <h4>Comments</h4>
            <div className={styles.container}>
                {children}

                <div className={styles.buttonContainer}>
                    {
                        commentEnd
                            ?
                            <Button
                            buttonType={"primary"}
                            children={"View more comments"}
                            onClick={loadMore}
                        />
                            :
                            <Button
                                buttonType={"outline"}
                                children={"View more comments"}
                                onClick={loadMore}
                            />
                    }
                </div>
            </div>
        </div>
    );
};

export default CommentsContainer;