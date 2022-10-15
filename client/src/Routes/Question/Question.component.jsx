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
import tester from "../../Assets/code.png"
import AnswerBoxComponent from '../../Components/AnswerBox/AnswerBox.component';
const Question = () => {
    const [def, setDef] = useState()
    const numbers = [1, 2, 4, 5,6,2,2,2,2,2,2,2,2,2,2,2,2];
    const [loadMore, setLoadMore] = useState(3);
    const [endComments, setEndComments] = useState(false)
    const code = `useEffect(() => { 
        setDef(numbers.slice(0, loadMore).map(i => <Comment key={i} />))
    }, [])`

    useEffect(() => {
        setDef(numbers.slice(0, loadMore).map(i => <Comment 
            auth={'Leander van Aarde'}
            date={`29 June 2021 @ 21:00`}
            comment = {`Please be clearer with this this this and this because this is difficult to understand and I don't quite understand what you're trying to achieve with this this this and also with this. So how are you going to do this.
            Please be clearer with this this this and this because this is difficult to understand and I don't quite understand what you're trying to achieve with this this this and also with this. So how are you going to do this
            Please be clearer with this this this`}
            key={i} />))
    }, [loadMore])

    const loadMoreComments = () => {
        if(loadMore >= numbers.length){
            // setLoadMore(loadMore)
            setLoadMore(3)
            setEndComments(true)
            
        } else{
            setLoadMore(loadMore + 3)
            window.scroll({
                bottom: document.body.offsetHeight,
                left: 0, 
                behavior: 'smooth',
              });
        }
    }

    return (
        <div className={styles.container}>
            <SideNavigation />
            <div className={styles.center}>
                <IndividualQuestion
                    votes={12}
                    title={'How to use Useffect to create component in Reactjs'}
                    author={'Leander van Aarde'}
                    dt={'29 November 2026'}
                    description={'I am trying to do this this and this and so this wont work because of the useEffect not doing this and it will just continue running and running and this is a description that nobody else will understand lolol but this is coool and all but is it really needed? I am totally happy with doing it all, I want it all, I want it all and I want it now - who sang this song again?'}
                    cd={code}
                    image={tester}
                />
                <CommentsContainer children={def} loadMore={loadMoreComments}  />
                <AnswerBoxComponent/>
                <AnswerBoxComponent/>
                <PostAnswer/>
            </div>

            <RightContainer />

        </div>
    );
};

export default Question;