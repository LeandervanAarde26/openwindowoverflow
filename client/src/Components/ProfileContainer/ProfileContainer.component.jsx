import React from 'react';
import styles from "./ProfileContainer.module.scss";
import Button from '../Button/Button.component';
import Github from "../../Assets/Github.png"
import Car from "../../Assets/car.jpg"
import Tags from '../Tags/Tags.component';
import BadgeContainer from '../BadgeContainer/BadgeContainer.component';
import Userbadges from "../Badges/userbadges.json"
import Badges from '../Badges/Badges.component';
import { useState } from 'react';
import UserReputation from '../UserReputation/UserReputation.component';
import MyQuestionsAnswers from '../MyQuestionsAnswers/MyQuestionsAnswers.component';
import MyQuestionsAnswersContainer from '../MyQuestionsAnswersContainer/MyQuestionsAnswersContainer.component';


const ProfileContainer = ({ image }) => {
    const [state, setState] = useState()
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

    console.log(listBadges)

    return (
        <div className={styles.container}>
                        <BadgeContainer
                    children={tester}
                />
            
            <div className={styles.topContainer}>
                
                <div className={styles.profilePhoto}>
                    <img src={Car} />
                </div>
                <Button
                        buttonType={'github'}
                        children={
                            <>
                                <img src={Github}
                                    style={{ height: 50 }} />
                                <p>View Github</p>
                            </>
                        } />

                <div className={styles.userIntro}>
                    <h3>Some Person</h3>
                    <p className={styles.year}>2nd Year Development Student</p>
                    <div className={styles.accContainer}>
                        <p className={styles.accomplishments}>12 Questions</p>
                        <p className={styles.accomplishments}>15 Answers</p>
                        <p className={styles.accomplishments}>4 Badges</p>
                    </div>

                    <p className={styles.reputation}>Overall Reputation <b>55%</b></p>
                </div>

            </div>
            <div className={styles.description}>
                <h4>About some Person</h4>
                <p>Hi! I am a second year Development student who really enjoys this this and this, I dont enjoy this this and this. Feel free to add me here here and here, Hi! I am a second year Development student who really enjoys this this and this, I dont enjoy this this and this. Feel free to add me here here and here</p>
                <div className={styles.button}>
                    {/* <Button
                        buttonType={'github'}
                        children={
                            <>
                                <img src={Github}
                                    style={{ height: 50 }} />
                                <p>View Github</p>
                            </>
                        } /> */}
                </div>

                <h4>Following Tags</h4>
                <div className={styles.tagsContainer}>
                    {visuals}
                </div>

                <div className={styles.title}>
                    <h3>Badges</h3>
                </div>
            </div>

            {/* <BadgeContainer
                    children={tester}
                /> */}

            <div className={styles.reputationCon}>
            {/* <UserReputation/> */}
            </div>
            <MyQuestionsAnswersContainer/>
        </div>
    );
};

export default ProfileContainer;