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
import MyQuestionsAnswersContainer from '../MyQuestionsAnswersContainer/MyQuestionsAnswersContainer.component';
import Input from "../Input/Input.component"
/* Icons/Images */
import Github from "../../Assets/Github.png";
import Car from "../../Assets/car.jpg";

/* Context */
import { RegisterContext } from '../../Contexts/Register.context';

/* JSON */
import Userbadges from "../Badges/userbadges.json";

/* Axios */
import axios from 'axios';

const ProfileContainer = ({ image, user, year, questions, answers, badges, tags, aboutUser, github, userId, ...otherProps }) => {
    // Context used for Rerender
    const { setCurrentUser } = useContext(RegisterContext);
    const [editState, setEditState] = useState(false)
    // Replace this const with the actual Axios Call
    const listBadges = Userbadges
    // Badges 
    const tester = listBadges.map((i, index) => (
        index === 0
            ?
            <Badges key={index} title={i.title} badgeImage={i.badgeImage} badgeDescription={i.badgeDescription} id={styles.left} />
            :
            <Badges key={index} title={i.title} badgeImage={i.badgeImage} badgeDescription={i.badgeDescription} />
    ))
    // These are the "default form values for the users, So that they can see what the values were before"
    const [formValues, setFormValues] = useState({
        username: user,
        currentStudyYear: year,
        githubLink: github ,
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
                console.log(res)
                setEditState(prev => !prev)
                setCurrentUser(userId)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className={styles.container}>
            <div className={styles.topContainer} >
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
                <div className={styles.userIntro}>
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
                            <h3>{username}</h3>
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
                        <p className={styles.accomplishments}>{questions} Questions</p>
                        <p className={styles.accomplishments}>{answers} Answers</p>
                        <p className={styles.accomplishments}>{badges} Badges</p>
                    </div>
                </div>
            </div>
            <div className={styles.description}>
                {
                    editState
                        ?
                        <>
                            <h5>Tell us more about you, {user}</h5>
                            <br />
                            <textarea
                                value={userDescription}
                                type="text"
                                name="userDescription"
                                onChange={handleChange}
                            >
                            </textarea>
                        </>
                        :
                        <>
                            <h4>About {user}</h4>
                            <p>{aboutUser}</p>
                        </>
                }

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

                <h4>Following Tags</h4>
                <div className={styles.tagsContainer}>
                    {tags}
                </div>
                <div className={styles.title}>
                    <h3>Badges</h3>
                </div>
            </div>

            <BadgeContainer
                children={tester}
            />
            <div className={styles.reputationCon}>
                <UserReputation />
            </div>
            <MyQuestionsAnswersContainer />
        </div>
    );
};

export default ProfileContainer;