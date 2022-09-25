import React from 'react';
import styles from "./Profile.module.scss";
import SideNavigation from '../../Components/sideNavigation/SideNavigation.component';
import ProfileContainer from '../../Components/ProfileContainer/ProfileContainer.component';

const Profile = () => {
    
    return (
        <div className={styles.container}>
            <SideNavigation />
            <ProfileContainer/>
        </div>
    );
};

export default Profile;

