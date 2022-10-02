import React from 'react';
import ProfileCard from './ProfileCard';
import Button from '../Button/Button.component'

import styles from './ProfileContact.module.scss';

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