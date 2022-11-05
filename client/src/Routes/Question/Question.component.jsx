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
import image from "../../Assets/DefaultProfileImages/Default5.png"
/* Icons/Images */
import tester from "../../Assets/code.png"
import AWS from "aws-sdk"

// Default form values for the answer
const defaultFormValues = {
    answer: '',
    code: '',
    image: ''
}
const userComment = {
    comments: ''
}

const region = "af-south-1";
const bucketName = 'openoverflow'
AWS.config.update({
    accessKeyId: "AKIAWDMDUWDEHUXLLQOB",
    secretAccessKey: "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"
});
const bucket = new AWS.S3({
    params: { Bucket: bucketName },
    region: region
})




const Question = () => {
    const [image, setImage] = useState(null);
    const [databaseImage, setDataBaseImage] = useState(null)
    const [def, setDef] = useState()
    const [formValues, setFormValues] = useState(defaultFormValues);
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
    const [sim, setSimiliar] = useState()

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
            comments: []
        }
    );

    const getImages = async (e) => {
        setImage(URL.createObjectURL(e.target.files[0]))
        let img = e.target.files[0]
        setDataBaseImage(img)
        // console.log(img.name)
    }

    const [userId, setUserId] = useState('');
    const [rerender, setRerender] = useState(false);
    const [upVotes, setUpVotes] = useState([]);
    const [downVotes, setDownVotes] = useState([]);
    const [didDownVote, setDidDownVote] = useState(false);
    const [didUpVote, setDidUpVote] = useState(false);
    useEffect(() => {
        let user = sessionStorage.getItem('currentUser')
        setUserId(user)

        axios.get('http://localhost:5001/api/question/' + questionId.questionId)
            .then(res => {
                if (res.data.votes.up.includes(user)) {
                    setDidUpVote(true);
                } else if (res.data.votes.down.includes(user)) {
                    setDidDownVote(true);
                } else {
                    setDidDownVote(false);
                    setDidUpVote(false);
                }
                setUpVotes(res.data.votes.up);
                setDownVotes(res.data.votes.down);
                setQuestionData(res.data);

                let tags = res.data.tags
                // console.log(tags[0])
                axios.get(`http://localhost:5001/api/getsimiliar/${tags[0]}/${questionId.questionId}`)
                    .then(res => {
                        console.log(res)
                        setSimiliar(res.data)
                        setBusy(false)
                    })
                    .catch(err => {
                        console.log(err)
                    })

            })

            .catch(err => {
                console.log(err)
            })
        setRerender(false);
    }, [rerender, questionId.questionId]);



    const handleClick = (e) => {

        if(databaseImage == null){
            if (formValues.answer === '' || formValues.code == '') {
                console.log('please fill out answer')
            } else {
                axios.patch(`http://localhost:5001/api/question/answer/${userId}/${questionId.questionId}`, formValues)
                    .then(res => {
                        console.log(res.data)
                        if (res.data) {
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
        } else{
            const newImage = `https://openoverflow.s3.af-south-1.amazonaws.com/${databaseImage.name.replace(/\s/g, '')}`
            const temp = databaseImage.name.replace(/\s/g, '')

            const params = {
                ACL: "public-read",
                Body: databaseImage,
                Bucket: bucketName,
                Key: temp
            }
            bucket.putObject(params).send(err => console.log(err))

            let data = {
                answer: formValues.answer,
                code:formValues.code,
                Images: newImage
            }

            axios.patch(`http://localhost:5001/api/question/answer/${userId}/${questionId.questionId}`, data)
            .then(res => {
                console.log(res.data)
                if (res.data) {
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
        let val = sessionStorage.getItem("currentUser")
        let payload = {
            user: val,
            comment: commentVal.comments
        }
        axios.patch(`http://localhost:5001/api/addComment/${questionId.questionId}`, payload)
            .then(res => {
                if (res.data.state) {
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
        if (loadMore >= def.length) {
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

    const castVote = (e) => {
        let upvotes = upVotes;
        let downvotes = downVotes;

        if (e == 'up' && !upVotes.includes(userId)) {
            if (downVotes.includes(userId)) {
                console.log("had a downvote")
                let newdownvotes = downvotes.filter((x) => x !== userId);

                let data = {
                    questionId: questionId.questionId,
                    userId: userId,
                    upVotes: upvotes,
                    downVotes: newdownvotes
                }

                axios.patch('http://localhost:5001/api/votes/up', data)
                    .then(res => {
                        console.log(res);
                        if (res.data) {
                            setRerender(true);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })

            } else {
                console.log("Had no downvotes")
                upvotes.push(userId);
                console.log(upvotes)

                let data = {
                    questionId: questionId.questionId,
                    userId: userId,
                    upVotes: upvotes,
                    downVotes: downvotes
                }

                axios.patch('http://localhost:5001/api/votes/up', data)
                    .then(res => {
                        console.log(res)
                        if (res.data) {
                            setRerender(true);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
        } else if (e == 'down' && !downVotes.includes(userId)) {
            if (upVotes.includes(userId)) {
                // console.log("had a upvote")
                let newupvotes = upvotes.filter((x) => x !== userId);

                let data = {
                    questionId: questionId.questionId,
                    userId: userId,
                    upVotes: newupvotes,
                    downVotes: downvotes
                }

                axios.patch('http://localhost:5001/api/votes/down', data)
                    .then(res => {
                        // console.log(res);
                        if (res.data) {
                            setRerender(true);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
            } else {
                downvotes.push(userId);

                let data = {
                    questionId: questionId.questionId,
                    userId: userId,
                    upVotes: upvotes,
                    downVotes: downvotes
                }

                axios.patch('http://localhost:5001/api/votes/down', data)
                    .then(res => {
                        console.log(res);
                        if (res.data) {
                            setRerender(true);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
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
                    upVoted={didUpVote}
                    downVoted={didDownVote}
                    upVoteClick={(e) => castVote("up")}
                    downVoteClick={(e) => castVote("down")}
                />

                <div className={styles.comments}>
                    <CommentsContainer
                        children={questionData.comments.map((i, index) => (
                            <Comment
                                id={i._id}
                                auth={i.user.username}
                                date={new Date(i.commentDate).toString().slice(0, 16)}
                                comment={i.comment}
                                key={index}
                                questionId={questionId.questionId}
                                flagged={i.flagged}
                            />
                        ))}
                        loadMore={loadMoreComments}
                        // label={"answer"}
                        activeComment={comment}
                        value={comments}
                        type="text"
                        name="comments"
                        onChange={handleCommentChange}
                        placeholder="Enter your comment here..."
                        commentable={leaveComment}
                        post={postComment}
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
                                    answerImage={x.images}
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
                        getImg = {getImages}
                        image={image}
                    />
                </div>
            </div>
            {
                busy 
                ?
                null
                :
                <RightContainer
                simliliar={sim}
                questionid = {questionId.questionId}
            />
            }
        </div>
    );
};

export default Question;