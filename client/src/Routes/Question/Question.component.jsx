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
// Array

let Arr = [];

const Question = () => {
    const questionId = useParams();

    useEffect(() => {
        let val = sessionStorage.getItem("currentUser")
        console.log("🚀 ~ file: Question.component.jsx ~ line 30 ~ useEffect ~ val", val)
        axios.get('http://localhost:5001/api/question/' + questionId.questionId)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, []);

    console.log("🚀 ~ file: Question.component.jsx ~ line 26 ~ Question ~ questionId", questionId)    


    const [def, setDef] = useState()
    const [formValues, setFormValues] = useState(defaultFormValues);
    const { answer, answerCode } = formValues
    const numbers = [1, 2, 4, 5, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
    const [loadMore, setLoadMore] = useState(3);
    const [endComments, setEndComments] = useState(false)
    const [dat, setDat] = useState()
    const code = `useEffect(() => { 
        setDef(numbers.slice(0, loadMore).map(i => <Comment key={i} />))
    }, [])`
    const testTags = ['React', "Circuit Python"];

    useEffect(() => {
        setDef(numbers.slice(0, loadMore).map(i => <Comment
            auth={'Leander van Aarde'}
            date={`29 June 2021 @ 21:00`}
            comment={`Please be clearer with this this this and this because this is difficult to understand and I don't quite understand what you're trying to achieve with this this this and also with this. So how are you going to do this.
            Please be clearer with this this this and this because this is difficult to understand and I don't quite understand what you're trying to achieve with this this this and also with this. So how are you going to do this
            Please be clearer with this this this`}
            key={i} />));


            testTags.map((i) =>
            axios.get(`http://localhost:5001/api/getQuestions/${i}`)
            .then(res =>{
                    // console.log(res.data)
                    // Arr.push(...Arr, res.data)
                    let data = res.data

                    res.data.map(test => {
                        Arr.push(test)
                    })
            })
            .catch(err =>{
                console.log(err)
            })
            )
 
    }, [loadMore])

    console.log(Arr)


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleClick = (e) => {
        if (formValues.answer === '' || formValues.answerCode == '') {
            console.log('please fill out answer')
        } else {
            console.log(formValues)
            //Do axios.patch here and add the comment?
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

                <CommentsContainer children={def} loadMore={loadMoreComments} />
                <AnswerBoxComponent />
                <AnswerBoxComponent />
                <PostAnswer onChange={handleChange} handleClick={handleClick} />
            </div>

            <RightContainer />
        </div>
    );
};

export default Question;