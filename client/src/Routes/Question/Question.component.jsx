/* React */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

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
import axios from 'axios';

// Default form values for the answer
const defaultFormValues = {
    answer: '',
    answerCode: ''
}
const userComment = {
    comments: ''
}
// Array

let Arr = [];

const Question = () => {
    const questionId = useParams();
    const [def, setDef] = useState()
    const [formValues, setFormValues] = useState(defaultFormValues);
    const { answer, answerCode } = formValues
    const numbers = [1, 2, 4, 5, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
    const [loadMore, setLoadMore] = useState(3);
    const [dat, setDat] = useState()
    const [busy, setBusy] = useState(true)
    const [tags, setTags] = useState()
    // Comments
    const [commentVal, setCommentVal] = useState(userComment)
    const {comments} = commentVal
    const [comment, setComment] = useState()
    const [endComments, setEndComments] = useState(false)

    const code = `useEffect(() => { 
        setDef(numbers.slice(0, loadMore).map(i => <Comment key={i} />))
    }, [])`
    const testTags = ['React', "Circuit Python"];


    useEffect(() => {
        console.log("START")
        let val = sessionStorage.getItem("currentUser")
        console.log("🚀 ~ file: Question.component.jsx ~ line 30 ~ useEffect ~ val", val)
        axios.get('http://localhost:5001/api/question/' + questionId.questionId)
            .then(res => {
                console.log(res.data)
                setDat(res.data)
                setBusy(false)
                setTags(res.data.tags)
            })
            .catch(err => {
                console.log(err)
            })

    }, []);

    console.log("🚀 ~ file: Question.component.jsx ~ line 26 ~ Question ~ questionId", questionId)

    useEffect(() => {
        setDef(numbers.slice(0, loadMore).map(i => <Comment
            auth={'Leander van Aarde'}
            date={`29 June 2021 @ 21:00`}
            comment={`Please be clearer with this this this and this because this is difficult to understand and I don't quite understand what you're trying to achieve with this this this and also with this. So how are you going to do this.
            Please be clearer with this this this and this because this is difficult to understand and I don't quite understand what you're trying to achieve with this this this and also with this. So how are you going to do this
            Please be clearer with this this this`}
            key={i} />));

    }, [loadMore])

    console.log(Arr)


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleCommentChange = (e) =>{
        const {name, value} = e.target
        setCommentVal({...commentVal, [name]: value})

    }

    // Cancel 
    const leaveComment = () =>{
        setComment(prev => !prev)
    }

    // Add comment 
    const postComment = () =>{
        console.log(commentVal)
        let val = sessionStorage.getItem("currentUser")
        let payload = {
            user: val, 
            comment: commentVal.comments
        }
        axios.patch(`http://localhost:5001/api/addComment/${questionId.questionId}`, payload)
        .then(res =>{
            console.log(res)
        })
        .catch(err =>{
            console.log(err)
        })
    }

    const handleClick = (e) => {
        if (formValues.answer === '' || formValues.answerCode == '') {
            console.log('please fill out answer')
        } else {
            console.log(formValues)
            
        }
    }

    

    const loadMoreComments = () => {
        if (loadMore >= numbers.length) {
            // setLoadMore(loadMore)
            setLoadMore(3)
            setEndComments(true)

        } else {
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
            {
                busy
                    ?
                    null
                    :
                    <div className={styles.center}>
                        <IndividualQuestion
                            votes={dat.rating}
                            title={dat.title}
                            author={dat.author.username}
                            dt={'29 November 2026'}
                            description={dat.question}
                            cd={dat.code}
                            image={tester}
                        />

                        <CommentsContainer 
                        children={def} 
                        loadMore={loadMoreComments} 
                        // label={"answer"}
                        activeComment = {comment}
                        value={comments}
                        type="text"
                        name="comments"
                        onChange={handleCommentChange}
                        placeholder="Enter your comment here..."
                        commentable={leaveComment}
                        post ={postComment}
                     
                        />
                        <AnswerBoxComponent 
                        
                        />
                        <AnswerBoxComponent />
                        <PostAnswer onChange={handleChange} handleClick={handleClick} />
                    </div>
            }
            <RightContainer />
        </div>
    );
};

export default Question;