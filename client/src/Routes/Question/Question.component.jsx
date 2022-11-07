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
    }

    const [userId, setUserId] = useState('');
    const [rerender, setRerender] = useState(false);
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
                setQuestionData(res.data);

                let tags = res.data.tags
                axios.get(`http://localhost:5001/api/getsimiliar/${tags[0]}/${questionId.questionId}`)
                    .then(res => {
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
        if (databaseImage == null) {
            if (formValues.answer === '' || formValues.code == '') {
                console.log('please fill out answer')
            } else {
                axios.patch(`http://localhost:5001/api/question/answer/${userId}/${questionId.questionId}`, formValues)
                    .then(res => {
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
        } else {
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
                code: formValues.code,
                Images: newImage
            }

            axios.patch(`http://localhost:5001/api/question/answer/${userId}/${questionId.questionId}`, data)
                .then(res => {
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

    const questionUpVote = (upVotes, downVotes) => {
        if (!upVotes.includes(userId)) {
            if (downVotes.includes(userId)) {
                let newDownVotes = downVotes.filter((x) => x !== userId);

                let data = {
                    questionId: questionId.questionId,
                    userId: userId,
                    upVotes: upVotes,
                    downVotes: newDownVotes
                }

                axios.patch('http://localhost:5001/api/questionVote/up', data)
                    .then(res => {
                        if (res.data) {
                            setRerender(true);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
            } else {
                let votes = upVotes;
                votes.push(userId);

                let data = {
                    questionId: questionId.questionId,
                    userId: userId,
                    upVotes: votes,
                    downVotes: downVotes
                }

                axios.patch('http://localhost:5001/api/questionVote/up', data)
                    .then(res => {
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

    const questionDownVote = (upVotes, downVotes) => {
        // First of all check if user has not already downVoted.
        if (!downVotes.includes(userId)) {
            // Then checks if user has not previously upVoted
            if (upVotes.includes(userId)) {
                let newUpVotes = upVotes.filter((x) => x !== userId)

                let data = {
                    questionId: questionId.questionId,
                    userId: userId,
                    upVotes: newUpVotes,
                    downVotes: downVotes
                }

                axios.patch('http://localhost:5001/api/questionVote/down', data)
                    .then(res => {
                        if (res.data) {
                            setRerender(true);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
            } else {
                let votes = downVotes
                votes.push(userId)

                let data = {
                    questionId: questionId.questionId,
                    userId: userId,
                    upVotes: upVotes,
                    downVotes: votes
                }

                axios.patch('http://localhost:5001/api/questionVote/down', data)
                    .then(res => {
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

    const answerUpVote = (answerId, upVotes, downVotes) => {
        // First of all check if user has not already upVoted.
        if (!upVotes.includes(userId)) {
            // Then checks if user has not previously downVoted
            if (downVotes.includes(userId)) {
                let newDownVotes = downVotes.filter((x) => x !== userId);

                let data = {
                    questionId: questionId.questionId,
                    userId: userId,
                    answerId: answerId,
                    upVotes: upVotes,
                    downVotes: newDownVotes
                }

                axios.patch('http://localhost:5001/api/answerVote/up', data)
                    .then(res => {
                        if (res.data) {
                            setRerender(true);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
            } else {
                let votes = upVotes;
                votes.push(userId);

                let data = {
                    questionId: questionId.questionId,
                    userId: userId,
                    answerId: answerId,
                    upVotes: votes,
                    downVotes: downVotes
                }

                axios.patch('http://localhost:5001/api/answerVote/up', data)
                    .then(res => {
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

    const answerDownVote = (answerId, upVotes, downVotes) => {
        // First of all check if user has not already downVoted.
        if (!downVotes.includes(userId)) {
            // Then checks if user has not previously upVoted
            if (upVotes.includes(userId)) {
                let newUpVotes = upVotes.filter((x) => x !== userId)

                let data = {
                    questionId: questionId.questionId,
                    userId: userId,
                    answerId: answerId,
                    upVotes: newUpVotes,
                    downVotes: downVotes
                }

                axios.patch('http://localhost:5001/api/answerVote/down', data)
                    .then(res => {
                        if (res.data) {
                            setRerender(true);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
            } else {
                let votes = downVotes
                votes.push(userId)

                let data = {
                    questionId: questionId.questionId,
                    userId: userId,
                    answerId: answerId,
                    upVotes: upVotes,
                    downVotes: votes
                }

                axios.patch('http://localhost:5001/api/answerVote/down', data)
                    .then(res => {
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

    const flagComment = (id, flags) => {
        if (flags.includes(userId)) {
            let newFlags = flags.filter((x) => x !== userId);

            let data = {
                questionId: questionId.questionId,
                commentId: id,
                flags: newFlags,
                flagged: newFlags.length < 1 ? false : true
            }

            axios.patch('http://localhost:5001/api/flagComment', data)
                .then(res => {
                    if (res.data) {
                        setRerender(true);
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        } else {
            let flagsArr = flags;
            flagsArr.push(userId);

            let data = {
                questionId: questionId.questionId,
                commentId: id,
                flags: flagsArr,
                flagged: flagsArr.length < 1 ? false : true
            }

            axios.patch('http://localhost:5001/api/flagComment', data)
                .then(res => {
                    if (res.data) {
                        setRerender(true);
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    const markAsResolved = (answerId, answerById) => {
        let data = {
            answerId: answerId,
            userId: userId,
            questionId: questionId.questionId,
            answerUser: answerById
        }
        axios.patch('http://localhost:5001/api/resolveQuestion', data)
            .then(res => {
                if (res.data) {
                    setRerender(true);
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const markAsUnResolved = (answerId, answerById) => {
        let data = {
            answerId: answerId,
            userId: userId,
            questionId: questionId.questionId,
            answerUser: answerById
        }
        axios.patch('http://localhost:5001/api/unResolveQuestion', data)
            .then(res => {
                if (res.data) {
                    setRerender(true);
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

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
                    upVoteClick={(upVotes, downVotes) => questionUpVote(questionData.votes.up, questionData.votes.down)}
                    downVoteClick={(upVotes, downVotes) => questionDownVote(questionData.votes.up, questionData.votes.down)}
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
                                flagged={
                                    i.flags.includes(userId)
                                        ? true
                                        : false
                                }
                                clickFlag={(id, flags) => flagComment(i._id, i.flags)}
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
                                    owner={questionData.author._id == userId ? true : false}
                                    answered={questionData.resolved ? true : false}
                                    key={x._id}
                                    markUnResolved={(answerId, answerById) => markAsUnResolved(x._id, x.user._id)}
                                    markResolved={(answerId, answerById) => markAsResolved(x._id, x.user._id)}
                                    correct={x.resolved ? true : false}
                                    answer={x.answer}
                                    code={x.code}
                                    votes={x.rating}
                                    answerImage={x.images}
                                    upVote={(answerId, upVotes, downVotes) => answerUpVote(x._id, x.votes.up, x.votes.down)}
                                    downVote={(answerId, upVotes, downVotes) => answerDownVote(x._id, x.votes.up, x.votes.down)}
                                    didDownVote={
                                        x.votes.down.includes(userId)
                                            ? true
                                            : false
                                    }
                                    didUpVote={
                                        x.votes.up.includes(userId)
                                            ? true
                                            : false
                                    }
                                    rerender={value => setRerender(value)}
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
                        getImg={getImages}
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
                        questionid={questionId.questionId}
                    />
            }
        </div>
    );
};

export default Question;