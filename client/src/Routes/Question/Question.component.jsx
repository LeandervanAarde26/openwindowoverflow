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
import AnswerBoxComponent from '../../Components/AnswerBox/AnswerBox.component';
import axios from 'axios';

/* Icons/Images */
import tester from "../../Assets/code.png"

// Default form values for the answer
const defaultFormValues = {
    answer: '',
    code: ''
}
const userComment = {
    comments: ''
}

const Question = () => {

    const [def, setDef] = useState()
    const [formValues, setFormValues] = useState(defaultFormValues);
    const [questionImage, setQuestionImage] = useState(tester)
    const { answer, answerCode } = formValues
    const [loadMore, setLoadMore] = useState(3);
    const [dat, setDat] = useState()
    const [busy, setBusy] = useState(true)
    const [tags, setTags] = useState()
    // Comments
    const [commentVal, setCommentVal] = useState(userComment)
    const { comments } = commentVal
    const [comment, setComment] = useState()
    const [endComments, setEndComments] = useState(false)
    const questionId = useParams();

    const [questionData, setQuestionData] = useState(
        {
            title: 'sfasf',
            rating: '',
            resolved: '',
            author: {
                _id: '',
                username: 'test'
            },
            answeredBy: {
                author: '',
                date: ''
            },
            postedDate: '',
            question: '',
            code: '',
            answers: [],
            comments:[]
        }
    );

    const [userId, setUserId] = useState('');   
    const [rerender, setRerender] = useState(false);
    useEffect(() => {
        let user = sessionStorage.getItem('currentUser')
        setUserId(user)

        axios.get('http://localhost:5001/api/question/' + questionId.questionId)
        .then(res => {
            console.log(res.data)
            setQuestionData(res.data);
        })
        .catch(err => {
            console.log(err)
        })
        setRerender(false);
        console.log('hey')
    }, [rerender]);


    const handleClick = (e) =>{
        if(formValues.answer === '' || formValues.code == ''){
            console.log('please fill out answer')
        } else {
            axios.patch(`http://localhost:5001/api/question/answer/${userId}/${questionId.questionId}`, formValues)
            .then(res => {
                console.log(res.data)
                if(res.data) {
                    setRerender(true)
                }
                setDat(res.data)
                setBusy(false)
                setTags(res.data.tags)

            })
            .catch(err => {
                console.log(err)
            })
        }
    }

// Change for answers
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleCommentChange = (e) => {
        const { name, value } = e.target
        setCommentVal({ ...commentVal, [name]: value })
    }

    // Cancel 
    const leaveComment = () => {
        setComment(prev => !prev)
    }

    // Add comment 
    const postComment = () => {
        console.log(commentVal)
        let val = sessionStorage.getItem("currentUser")
        let payload = {
            user: val,
            comment: commentVal.comments
        }
        axios.patch(`http://localhost:5001/api/addComment/${questionId.questionId}`, payload)
            .then(res => {
                console.log(res)

                if(res.data.state){
                    setRerender(true)
                    setComment(prev => !prev)
                    setCommentVal(userComment)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const loadMoreComments = () => {
        if(loadMore >= def.length){
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

    console.log(questionData)

    return (
        <div className={styles.container}>
        <SideNavigation />
            <div className={styles.center}>
                <IndividualQuestion
                    votes={questionData.rating}
                    title={questionData.title}
                    author={questionData.author.username}
                    date={new Date(questionData.postedDate).toString().slice(0, 16)}
                    description={questionData.question}
                    code={questionData.code}
                    image={questionData.Images}
                />

                <div className={styles.comments}>
                    <CommentsContainer 
                        children={questionData.comments.map(i => (
                            <Comment
                                id={i._id}
                                auth={i.user.username}
                                date={`29 June 2021 @ 21:00`
                                }
                                comment={i.comment}
                                key={i} />
                        ))} 
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
                </div>

                <div className={styles.answers}>
                    {
                        questionData.answers.length > 0
                        ?
                            questionData.answers.map((x, index) =>
                                <AnswerBoxComponent
                                    answer={x.answer}
                                    code={x.code}
                                    votes={x.rating}
                                />
                            )
                        :
                            null
                    }
                </div>

                <div className={styles.postAnswer}>
                    <PostAnswer 
                        onChange={handleChange} 
                        handleClick={handleClick}
                    />
                </div>
            </div>
            <RightContainer />
        </div>
    );
};

export default Question;