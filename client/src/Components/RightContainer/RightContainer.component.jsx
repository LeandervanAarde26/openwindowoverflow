import React from 'react';
import styles from "./RightContainer.module.scss"
import Button from '../Button/Button.component';
import Discord from "../../Assets/Discord.png";
import AdSenseContainer from '../AdSenseContainer/AdSenseContainer.component';
import FollowedTags from '../FollowedTagsComponent/FollowedTags.component';
import { useLocation } from 'react-router';
const RightContainer = () => {
    const location = useLocation();

    return (
        <div className={styles.container}>
            {/* Insert followed Tags Component Here */}
            {
                location.pathname === "/Choosetags"
                    ?
                    null
                    :
                    <FollowedTags />
            }
            {/* End followed Tags Component Here */}
            <div className={styles.buttonContainer}>
                <Button
                    buttonType={'discord'}
                />
            </div>

            {/* <AdSenseContainer /> */}

        </div>
    );
};

export default RightContainer;