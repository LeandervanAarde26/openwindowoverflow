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


const RightContainer = ({simliliar, topRated}) => {
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

            {
                location.pathname === "/Question"
                    ?
                    <div className={styles.topRatedQuestions}>
                        <h4>Similiar Questions</h4>
                        {simliliar}
                        <TopRatedQuestion />
                        <TopRatedQuestion />
                        <TopRatedQuestion />
                    </div>
                    :
                    location.pathname === "/home"
                        ?
                        <div className={styles.topRatedQuestions}>
                            <h4>Top Rated Questions</h4>
                            <TopRatedQuestion />
                            <TopRatedQuestion />
                            <TopRatedQuestion />
                        </div>
                        :
                        null
            }
            {/* <AdSenseContainer /> */}
        </div>
    );
};

export default RightContainer;