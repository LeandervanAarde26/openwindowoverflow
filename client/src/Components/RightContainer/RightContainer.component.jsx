import React from 'react';
import styles from "./RightContainer.module.scss"
import Button from '../Button/Button.component';
import Discord from "../../Assets/Discord.png";
import AdSenseContainer from '../AdSenseContainer/AdSenseContainer.component';
import FollowedTags from '../FollowedTagsComponent/FollowedTags.component';
const RightContainer = () => {
    return (
        <div className={styles.container}>
            {/* Insert followed Tags Component Here */}

            <FollowedTags/>
            {/* End followed Tags Component Here */}

            <Button
                buttonType={'discord'}
            />

            {/* <AdSenseContainer /> */}

        </div>
    );
};

export default RightContainer;