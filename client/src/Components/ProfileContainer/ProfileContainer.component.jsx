import React from 'react';
import styles from "./ProfileContainer.module.scss";
import Button from '../Button/Button.component';
import Github from "../../Assets/Github.png"
import Car from "../../Assets/car.jpg"
import Tags from '../Tags/Tags.component';

const ProfileContainer = ({ image }) => {
    const testerTags = ['html', 'scss', 'scss', 'scss', 'css', 'React', '1', '2', '3', 'html', 'scss', 'scss', 'scss', 'css', 'React', '1', '2', '3']
    const visuals = testerTags.map((tag, index) => <Tags key={index} title={tag} />)
    return (
        <div className={styles.container}>
            <div className={styles.topContainer}>
                <div className={styles.profilePhoto}>
                    <img src={Car} />
                </div>
                <div className={styles.userIntro}>
                    <h3>Some Person</h3>
                    <p className={styles.year}>2nd Year Development Student</p>
                    <div className={styles.accContainer}>
                        <p className={styles.accomplishments}>12 Questions</p>
                        <p className={styles.accomplishments}>15 Answers</p>
                        <p className={styles.accomplishments}>4 Badges</p>
                    </div>
                </div>
            </div>
            <div className={styles.description}>
                <h4>About some Person</h4>
                <p>Hi! I am a second year Development student who really enjoys this this and this, I dont enjoy this this and this. Feel free to add me here here and here, Hi! I am a second year Development student who really enjoys this this and this, I dont enjoy this this and this. Feel free to add me here here and here</p>
                <div className={styles.button}>
                    <Button
                        buttonType={'github'}
                        children={
                            <>
                                <img src={Github}
                                    style={{ height: 50 }} />
                                <p>View Github</p>
                            </>
                        } />
                </div>

                <h4>Following Tags</h4>
                <div className={styles.tagsContainer}>
                    {visuals}
                </div>
            </div>
        </div>
    );
};

export default ProfileContainer;