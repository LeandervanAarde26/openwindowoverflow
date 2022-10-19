/* React */
import React from 'react';

/* Styling */
import styles from "./CommentsContainer.module.scss";

/* Components */
import Comment from '../Comment/Comment.component';
import Button from '../Button/Button.component';
import Input from "../../Components/Input/Input.component"

const CommentsContainer = ({ children, loadMore, commentEnd, commentable, comval, activeComment, post,  ...otherProps }) => {
    return (
        <div className={styles.outer}>
            <h4>Comments</h4>
            <div className={styles.container}>
                {children}

                <div className={styles.buttonContainer}>
                    {
                        activeComment
                            ?
                            <>
                                <Button
                                    buttonType={"primary"}
                                    children={"View more comments"}
                                    onClick={loadMore} />

                                <Button
                                    buttonType={'outline'}
                                    children={"Cancel"}
                                    onClick={commentable}
                                />
                            </>

                            :
                            <>
                                <Button
                                    buttonType={"primary"}
                                    children={"View more comments"}
                                    onClick={loadMore} />

                                <Button
                                    buttonType={'secondary'}
                                    children={"Leave a comment"}
                                    onClick={commentable}
                                />
                            </>

                    }
                </div>
                {
                    activeComment
                        ?

                        <div className={styles.commentContainer}>
                            <textarea {...otherProps}></textarea>
                            <div className={styles.button}>
                                <Button
                                    buttonType={'black'}
                                    children={'Post comment'}
                                    onClick={post}
                                />
                            </div>
                        </div>
                        :
                        null
                }
            </div>
        </div>
    );
};

export default CommentsContainer;