/* React */
import React, { useState, useContext } from 'react';

/* STyling */
import styles from "./ProfileContainer.module.scss";

/* Components */
import Button from '../Button/Button.component';
import Tags from '../Tags/Tags.component';
import BadgeContainer from '../BadgeContainer/BadgeContainer.component';
import Badges from '../Badges/Badges.component';
import UserReputation from '../UserReputation/UserReputation.component';
import MyQuestionsAnswers from '../MyQuestionsAnswers/MyQuestionsAnswers.component';

import Input from "../Input/Input.component"
import Article from '../Article/Article.component';
/* Icons/Images */
import Github from "../../Assets/Github.png";
import Car from "../../Assets/car.jpg";

/* Context */
import { RegisterContext } from '../../Contexts/Register.context';

/* JSON */
import Userbadges from "../Badges/userbadges.json";

/* Axios */
import axios from 'axios';
import QuestionsContainer from '../QuestionsContainer/QuestionsContainer.component';
import ArticlesContainer from '../ArticlesContainer/ArticlesContainer.component';
import { useEffect } from 'react';

const ProfileContainer = ({image, user, year, score, questions, answers, badges, tags, aboutUser, github, userId, ...otherProps }) => {
    // Context used for Rerender
    const { setCurrentUser } = useContext(RegisterContext);
    const [editState, setEditState] = useState(false)
<<<<<<< HEAD
=======
    const [score, setScore] = useState()
    const [articles, setArticles] = useState([])
    // const [busy, setBusy] = useState(true)

>>>>>>> e43dc8a92eb3434e3fe08a4f40bed2fda230f8e5
    // Replace this const with the actual Axios Call
    const listBadges = Userbadges
    // Badges 

    // These are the "default form values for the users, So that they can see what the values were before"
    const [formValues, setFormValues] = useState({
        username: user,
        currentStudyYear: year,
        githubLink: github,
        userDescription: aboutUser
    })
    // These are the default form values for a user that is logged in.
    const { username, currentStudyYear, githubLink, userDescription } = formValues

    // This will set the state for the UI to update accordingly between being able to update your profile
    const editInformation = () => {
        setEditState(prev => !prev)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }

    const updateInformation = () => {
        const payload = {
            username: formValues.username,
            currentStudyYear: formValues.currentStudyYear,
            userDescription: formValues.userDescription,
            githubLink: formValues.githubLink,
            userImage: image
        }

        axios.patch(`http://localhost:5001/api/edituser/${userId}`, payload)
            .then(res => {
                setEditState(prev => !prev);
                setCurrentUser(userId);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const [userQuestions, setUserQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState([]);
    const [myBadges, setMyBadges] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5001/api/getUserQuestionsandAnswers/${userId}`)
<<<<<<< HEAD
        .then(res => {
            // console.log(res)
            setUserQuestions(res.data.questions);
            setUserAnswers(res.data.answers);
        })
        .catch(err => {
            console.log(err)
        })

        console.log(badges)
        setMyBadges(
            listBadges.map((i, index) => (
                badges.includes(i.title) ?
                    <Badges key={index} title={i.title} image={i.badgeImage} description={i.badgeDescription} />
                : ''
                )
        ))
    }, []);
=======
            .then(res => {
                // console.log(res)
                setUserQuestions(res.data.questions);
                setUserAnswers(res.data.answers);
                console.log(res.data.answers)

                let questions = res.data.questions.map(i => i.rating)
                let sumQuestions = questions.reduce((prev, curr, index) => { return prev + curr }, 0)

                let answers = res.data.answers.map(i => i.answers.map(b => b.rating))
                let sumAnswers = answers.reduce((prev, curr, index) => { return prev + curr }, 0)

                let length = answers.length + questions.length
                let total = sumAnswers + sumQuestions

                let percentage = Math.floor((total / length) * 100)
                console.log(percentage)

                setScore(percentage)

            })
            .catch(err => {

            })
    }, []);

    useEffect(() => {
        axios.get(`http://localhost:5001/api/findArticleById/${userId}`)
            .then(res => {
                console.log(res)
                setArticles(res.data)

            })
            .catch(err => {
                console.log(err)
            })
    },[])

    console.log(score)
>>>>>>> e43dc8a92eb3434e3fe08a4f40bed2fda230f8e5

    return (
        <div className={styles.outer}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.profileInfo}>
                        {
                            editState
                                ?
                                <div className={styles.profilePhoto} {...otherProps}>
                                    <div className={styles.hoverProfile} >
                                        <p>Choose new profile photo</p>
                                    </div>
                                    <img src={image} />
                                </div>
                                :
                                <div className={styles.profilePhoto} >
                                    <img src={image} />
                                </div>
                        }
                        <div className={styles.information}>
                            {
                                editState ?
                                    <Input
                                        // id={error ? styles.err : ""}
                                        label={"Enter new username"}
                                        value={username}
                                        type="text"
                                        name="username"
                                        required={true}
                                        onChange={handleChange}
                                    />
                                    :
                                    <h3 className={styles.username}>{username}</h3>
                            }

                            {
                                editState ?
                                    <Input
                                        // id={error ? styles.err : ""}
                                        label={"What year are you in?"}
                                        value={currentStudyYear}
                                        type="number"
                                        max={4}
                                        name="currentStudyYear"
                                        required={true}
                                        onChange={handleChange}
                                    />
                                    :
                                    <p className={styles.year}>{year === 1 ? `${year}st` : year === 2 ? `${year}nd` : year === 3 ? `${year}rd` : ''} Year Development Student</p>
                            }

                            <div className={styles.accContainer}>
                                <p className={styles.accomplishments}>{userQuestions.length} {userQuestions.length < 2 ? "Question" : "Questions"}</p>
                                <p className={styles.accomplishments}>{userAnswers.length} {userAnswers.length < 2 ? "Answer" : "Answers"}</p>
                            </div>
                            <p className={styles.reputation}>Overall reputation: <span className={styles.rep}>{score}</span></p>

                            {
                                editState
                                    ?
                                    <div className={styles.githubLink}>
                                        <Input
                                            // id={error ? styles.err : ""}
                                            label={"Enter Github Link"}
                                            value={githubLink}
                                            type="text"
                                            name="githubLink"
                                            required={true}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    :
                                    null
                            }
                            <div className={styles.button}>
                                <a href={github} target="_blank">
                                    <Button
                                        buttonType={'github'} />
                                </a>

                                {
                                    editState
                                        ?
                                        <Button buttonType={'primary'}
                                            children={"Update profile"}
                                            id={styles.larger}
                                            onClick={updateInformation}
                                        />
                                        :
                                        null
                                }

                                <Button buttonType={'outline'}
                                    children={editState ? "Cancel" : "EditProfile"}
                                    id={styles.larger}
                                    onClick={editInformation}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        {
                            editState
                                ?
                                <>
                                    <h5>Tell us more about you, {user}</h5>
                                    <br />
                                    <textarea
                                        className={styles.area}
                                        value={userDescription}
                                        type="text"
                                        name="userDescription"
                                        onChange={handleChange}
                                        placeholder="No Description Yet!"
                                    >
                                    </textarea>
                                </>
                                :
                                <>
                                    <h4>About {user}</h4>
                                    <p>{aboutUser}</p>
                                </>
                        }

                        <h4>Following Tags</h4>
                        <div className={styles.tagsContainer}>
                            {tags}
                        </div>

                    </div>
                </div>
                <div className={styles.right}>
                    <h4>Earned badges</h4>
                    <BadgeContainer

                        children={myBadges}
                    />
                </div>
            </div>
            <div className={styles.bottomContainer}>
                <div className={styles.questions}>
                    <h4>Questions</h4>

                    <div className={styles.content}>
                        {
                            userQuestions.map((x, index) =>
                                <MyQuestionsAnswers
                                    title={x.title}
                                    votes={x.rating}
                                    answers={x.answers.length}
                                    resolved={x.resolved}
                                />
                            )
                        }
                    </div>
                </div>
                <div className={styles.answers}>
                    <h4>Answers</h4>
                    <div className={styles.content}>
                        {
                            userAnswers.map((x, index) =>
                                <MyQuestionsAnswers
                                    title={x.title}
                                    votes={x.rating}
                                    answers={x.answers.length}
                                    resolved={x.resolved}
                                />
                            )
                        }
                    </div>
                </div>

                <div className={styles.articles}>
                <h4>Articles </h4>
                {
                    articles.map(i => (<Article
                        key={i._id}
                        heading={i.title}
                        auth={i.author.username}
                        link={i.link}
                        desc={i.description}
                        likes={i.likes}
                        liked={i.likesList.includes(userId) ? true : false}
                    />))
                }
            </div>

            </div>



        </div>
    );
};

export default ProfileContainer;