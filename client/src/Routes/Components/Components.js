import React from "react";
import AdSenseContainer from "../../Components/AdSenseContainer/AdSenseContainer.component";
import Answers from "../../Components/Answers/Answers.component";
import ArticlesContainer from "../../Components/ArticlesContainer/ArticlesContainer.component";
import ArticlesFilter from "../../Components/ArticlesFilter/ArticlesFilter.component";
import ArticlesFilterContainer from "../../Components/ArticlesFilterContainer/ArticlesFilterContainer.component";
import MyQuestionsAnswers from "../../Components/MyQuestionsAnswers/MyQuestionsAnswers.component";
import SideNavigation from "../../Components/sideNavigation/SideNavigation.component";
import RightContainer from "../../Components/RightContainer/RightContainer.component";
import IntroductionHome from "../../Components/IntroductionHome/IntroductionHome.component"
import ValidationComplete from "../../Components/ValidationComplete/ValidationComplete.component"

import styles from "./Components.module.scss";
import PostAnswer from "../../Components/PostAnswer/PostAnswer.component";
import Dropdown from "../../Components/Dropdown/Dropdown";
import FlaggedComment from "../../Components/FlaggedComment/FlaggedComment.component"
import FollowableTags from "../../Components/FollowableTags/FollowableTags.component";
import FollowedTags from "../../Components/FollowedTagsComponent/FollowedTags.component";
import IndividualQuestion from "../../Components/IndividualQuestion/IndividualQuestion.component";
import Input from "../../Components/Input/Input.component";
import AnswerBox from '../../Components/AnswerBox/AnswerBox.component'
import Emailer from "../../Components/Emailer/Emailer.component";
import Preview from "../../Components/Preview/Preview.component";

const Components = () => {
    return (
        <div className={styles.container}>

            {/* <SideNavigation/> */}
            {/* <ValidationComplete/> */}
            {/* <PostAnswer/> */}
            {/* <IntroductionHome/> */}
            {/* <ArticlesFilterContainer/> */}
            {/* <MyQuestionsAnswers/> */}
            {/* <ArticlesFilter/> */}
            {/* <Answers/> */}
            {/* <RightContainer/> */}
            {/* <IndividualQuestion/> */}
            {/* <Input/> */}
            <AnswerBox/>
            {/* <Emailer/> */}
            {/* <Preview/> */}

    </div>
  );
};

export default Components;
