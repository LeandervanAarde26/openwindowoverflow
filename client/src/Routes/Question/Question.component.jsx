/* React */
import React, { useEffect, useState } from 'react';

/* Styling */
import styles from "./Question.module.scss";

/* Components */
import Comment from '../../Components/Comment/Comment.component';
import CommentsContainer from '../../Components/CommentsContainer/CommentsContainer.component';
import IndividualQuestion from '../../Components/IndividualQuestion/IndividualQuestion.component';
import PostAnswer from '../../Components/PostAnswer/PostAnswer.component';
import RightContainer from '../../Components/RightContainer/RightContainer.component';
import SideNavigation from '../../Components/sideNavigation/SideNavigation.component';

const Question = () => {
    const [def, setDef] = useState()
    const numbers = [1, 2, 4, 5];
    const [loadMore, setLoadMore] = useState(3);

    useEffect(() => {
        setDef(numbers.slice(0, loadMore).map(i => <Comment key={i} />))
    }, [])

    const loadMoreComments = ()=>{
        setLoadMore(loadMore +3)
    }

    return (
        <div className={styles.container}>
            <SideNavigation />
            <div className={styles.center}>
      
            <IndividualQuestion />
                <CommentsContainer
                    children={def}
                />

                <PostAnswer/>
            </div>
       
            <RightContainer />
        </div>
    );
};

export default Question;