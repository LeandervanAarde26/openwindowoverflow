/* React */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

/* Styling */
import styles from "./Profile.module.scss";

/* Components */
import SideNavigation from '../../Components/sideNavigation/SideNavigation.component';
import ProfileContainer from '../../Components/ProfileContainer/ProfileContainer.component';
import UserReputation from '../../Components/UserReputation/UserReputation.component';
import Tags from '../../Components/Tags/Tags.component';

// http://localhost:5001/api/individualuser/:

const Profile = () => {
    const profile = useParams()
    const [userInfo, setUserInfo] = useState()
    const [busy, setBusy] = useState(true)

    console.log(profile.userId)

    useEffect(() => {
        axios.get(`http://localhost:5001/api/individualuser/${profile.userId}`)
        .then(res =>{
            console.log(res)
            setUserInfo(res.data)
            setBusy(false)

        })
        .catch(err =>{
            console.log(err)
        })
    }, [])

    return (
        busy 
        ? 
            null
        : 
            <div className={styles.container}>
                <SideNavigation />
                <ProfileContainer 
                    image={userInfo.userImage}
                    username = {userInfo.username}
                    year={userInfo.currentStudyYear}
                    questions= {userInfo.userQuestions.length}
                    answers={userInfo.userAnswers.length}
                    badges={userInfo.earnedBadges.length}
                    tags={userInfo.followedTags.map((tag, index) => (<Tags key={index} title={tag} />))}
                />
            </div>
    );
};

export default Profile;