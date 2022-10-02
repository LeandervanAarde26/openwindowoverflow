import React from 'react';

import image from '../../Assets/car.jpg'
import styles from './Contact.module.scss';

import Button from '../../Components/Button/Button.component'
import ProfileContact from '../../Components/Profile/ProfileContact';
import SideNavigation from '../../Components/sideNavigation/SideNavigation.component';
import Discord from "../../Assets/Discord.png"



const Contact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container__sideNav}>
                <SideNavigation/>
            </div>
            <div className={styles.container__content}>
                <h1>Contact</h1>

                <h2>Staff</h2>

                <div className={styles.container__content__cards}>
                    <ProfileContact
                        profileImage={image}
                    />
                    <ProfileContact
                        profileImage={image}
                    />
                    <ProfileContact
                        profileImage={image}
                    />
                    <ProfileContact
                        profileImage={image}
                    />
                    <ProfileContact
                        profileImage={image}
                    />
                </div>
            </div>
            <div className={styles.container__rightContent}>
                <Button
                    buttonType={'discord'}
                    children={
                        <>
                            <img src={Discord}
                                style={{ height: 50 }} />
                            <p>Join the Discord</p></>
                    } 
                    buttonSize={"discordId"}
                />

                <h1>Top rated Questions</h1>
            </div>
        </div>
    );
};

export default Contact;