/* React */
import React from 'react';
import { useLocation } from 'react-router';

/* Styling */
import styles from "./RightContainer.module.scss"

/* Components */
import Button from '../Button/Button.component';
import AdSenseContainer from '../AdSenseContainer/AdSenseContainer.component';
import FollowedTags from '../FollowedTagsComponent/FollowedTags.component';

/* Icons/Images */
import Discord from "../../Assets/Discord.png";

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