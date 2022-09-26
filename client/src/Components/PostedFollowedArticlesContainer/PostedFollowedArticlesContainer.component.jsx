import React from 'react';
import styles from "./PostedFollowedArticlesContainer.module.scss"
import PostedFollowedArticles from '../PostedFollowedArticles/PostedFollowedArticles.component';

const PostedFollowedArticlesContainer = () => {
    

    return (
            <div className={styles.container}>
                <div className={styles.top}>
                    <h4>Posted Articles</h4>
                    <PostedFollowedArticles/>
                    <PostedFollowedArticles/>
                    <PostedFollowedArticles/>

                </div>
                <div className={styles.bottom}>
                    <h4>Followed Articles</h4>
                    <PostedFollowedArticles/>
                    <PostedFollowedArticles/>
                    <PostedFollowedArticles/>
                </div>
            </div>
    );
};

export default PostedFollowedArticlesContainer;

