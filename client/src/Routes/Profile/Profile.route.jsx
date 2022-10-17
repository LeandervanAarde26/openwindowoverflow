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
import ProfileCard from '../../Components/Profile/ProfileCard';

// Images 
import imageOne from "../../Assets/DefaultProfileImages/Default1.png";
import imageTwo from "../../Assets/DefaultProfileImages/Default2.png";
import imageThree from "../../Assets/DefaultProfileImages/Default3.png";
import imageFour from "../../Assets/DefaultProfileImages/Default4.png";
import imageFive from "../../Assets/DefaultProfileImages/Default5.png";
import EditProfileImage from '../../Components/EditProfileImage/EditProfileImage.component';

// http://localhost:5001/api/individualuser/:
const Profile = () => {
    const profile = useParams()
    const [userInfo, setUserInfo] = useState()
    const [userImage, setUserImage] = useState()
    const [busy, setBusy] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const defaultImageArray = [
        imageOne,
        imageTwo,
        imageThree,
        imageFour,
        imageFive
    ];

    const handleClick = () => {
        setOpenModal(prev => !prev)
    }

//Function will have to update so that it can be sent to the backend through AWS. 
    const update = (e) => {
        setUserImage(e.target.src)
    }

    // console.log(profile.userId)
    useEffect(() => {
        axios.get(`http://localhost:5001/api/individualuser/${profile.userId}`)
            .then(res => {
                setUserInfo(res.data)
                setUserImage(res.data.userImage)
                setBusy(false)
    
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    const cancelUpdate = () =>{
        setOpenModal(prev => !prev)
        setUserImage(userInfo.userImage)
    }

    return (
        busy
            ?
            null
            :
            <div className={styles.container}>
                <SideNavigation />
                <ProfileContainer
                    github={userInfo.githubLink}
                    onClick={handleClick}
                    userId = {profile.userId}
                    image={userImage}
                    user={userInfo.username}
                    year={userInfo.currentStudyYear}
                    questions={userInfo.userQuestions.length}
                    answers={userInfo.userAnswers.length}
                    badges={userInfo.earnedBadges.length}
                    tags={userInfo.followedTags.map((tag, index) => (<Tags key={index} title={tag} />))}
                    aboutUser = {userInfo.userDescription ? userInfo.userDescription: "No Description yet! "}
                />
                {openModal && <EditProfileImage
                    closeModal={cancelUpdate}
                    images={defaultImageArray}
                    selected={update}
                    changeImage={handleClick}
                />}
            </div>
    );
};

export default Profile;