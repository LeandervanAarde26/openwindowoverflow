/* React */
import React from 'react';

/* Styling */
import styles from './ProfileContact.module.scss';

/* Components */
import ProfileCard from './ProfileCard';
import Button from '../Button/Button.component'

const ProfileContact = (props) => {
    return (
        <div className={styles.container}>
            <ProfileCard
                profileImage={props.profileImage}
                className={styles.container__image}
            />

            <h1>Mike Maynard (Subject head)</h1>
            <h2>Mike@Openwindow.co.za</h2>
            <Button
                buttonType={"black"}
                children={"Email"}
            />
        </div>
    );
};

export default ProfileContact;