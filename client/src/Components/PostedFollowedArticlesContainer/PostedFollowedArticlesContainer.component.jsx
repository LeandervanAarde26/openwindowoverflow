import React from 'react';
import styles from "./PostedFollowedArticlesContainer.module.scss"
import PostedFollowedArticles from '../PostedFollowedArticles/PostedFollowedArticles.component';

const PostedFollowedArticlesContainer = () => {
    

    return (
  
            <div className={styles.container}>
                <div className={styles.top}>
                    <h4>Posted Articles</h4>
                    <PostedFollowedArticles/>
                </div>
                <div className={styles.bottom}>
                    <h4>Followed Articles</h4>
                    <PostedFollowedArticles/>
                </div>
            </div>
    );
};

export default PostedFollowedArticlesContainer;

// return (
//     <div className={styles.outer}>
//         <div className={styles.container}>
//             <div className={styles.left}>
//                 <h4>Questions</h4>
//             <MyQuestionsAnswers/>
//             <MyQuestionsAnswers/>
//             <MyQuestionsAnswers/>
//             <MyQuestionsAnswers/>
//             </div>
//             <div className={styles.right}>
//             <h4>Answers</h4>
//             <MyQuestionsAnswers/>
//             <MyQuestionsAnswers/>

//             </div>
//         </div>
//     </div>
// );
// };
