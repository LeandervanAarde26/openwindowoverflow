/* React */
import React from 'react';
import { useLocation } from 'react-router';

/* Styling */
import styles from "./RightContainer.module.scss"

/* Components */
import Button from '../Button/Button.component';
import AdSenseContainer from '../AdSenseContainer/AdSenseContainer.component';
import FollowedTags from '../FollowedTagsComponent/FollowedTags.component';
import TopRatedQuestion from '../TopRatedQuestion/TopRatedQuestion.component';

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
            <Button
                buttonType={'discord'}
            />
            <div className={styles.topRatedQuestions}>
                <h4>Top rated Questions...</h4>
                <br/>
                <TopRatedQuestion />
                <TopRatedQuestion />
                <TopRatedQuestion />
            </div>

            {/* <AdSenseContainer /> */}

        </div>
    );
};

export default RightContainer;