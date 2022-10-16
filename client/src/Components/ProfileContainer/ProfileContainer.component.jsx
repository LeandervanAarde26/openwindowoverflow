/* React */
import React, { useState } from 'react';

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

/* JSON */
import Userbadges from "../Badges/userbadges.json";

const ProfileContainer = ({ image, user, year, questions, answers, badges, tags, aboutUser, github, ...otherProps }) => {
    const [state, setState] = useState()
    const [editState, setEditState] = useState(false)
    const testerTags = ['html', 'scss', 'scss', 'scss', 'css', 'React', '1', '2', '3', 'html', 'scss', 'scss', 'scss', 'css', 'React', '1', '2', '3']
    const visuals = testerTags.map((tag, index) => <Tags key={index} title={tag} />)
    const listBadges = Userbadges
    const tester = listBadges.map((i, index) => (
        index === 0
            ?
            <Badges key={index} title={i.title} badgeImage={i.badgeImage} badgeDescription={i.badgeDescription} id={styles.left} />
            :
            <Badges key={index} title={i.title} badgeImage={i.badgeImage} badgeDescription={i.badgeDescription} />
    ))

    const [formValues, setFormValues] = useState({
        username: user,
        currentStudyYear: year,
        githubLink: 'https://github/com/',
        userDescription: '',
    })

    const { username, currentStudyYear, githubLink, userDescription } = formValues

    console.log(listBadges)

    const editInformation = () => {
        setEditState(prev => !prev)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }

    const updateInformation = () => {
        console.log(formValues)
    }

    return (
        <div className={styles.container}>
            <div className={styles.topContainer} >
                <div className={styles.profilePhoto} {...otherProps}>
                    <div className={styles.hoverProfile} >
                        <p>Choose new profile photo</p>
                    </div>
                    <img src={image} />
                </div>
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
                    <Button
                        buttonType={'github'} />

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