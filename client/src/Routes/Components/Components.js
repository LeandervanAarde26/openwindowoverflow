import React from "react";
import AdSenseContainer from "../../Components/AdSenseContainer/AdSenseContainer.component";
import Answers from "../../Components/Answers/Answers.component";
import ArticlesContainer from "../../Components/ArticlesContainer/ArticlesContainer.component";
import ArticlesFilter from "../../Components/ArticlesFilter/ArticlesFilter.component";
import ArticlesFilterContainer from "../../Components/ArticlesFilterContainer/ArticlesFilterContainer.component";
import MyQuestionsAnswers from "../../Components/MyQuestionsAnswers/MyQuestionsAnswers.component";
import SideNavigation from "../../Components/sideNavigation/SideNavigation.component";
import RightContainer from "../../Components/RightContainer/RightContainer.component";
import ValidationComplete from "../../Components/ValidationComplete/ValidationComplete.component"
import styles from "./Components.module.scss";
import PostAnswer from "../../Components/PostAnswer/PostAnswer.component";

const Components = () => {
  return (
    <div className={styles.container}>

      <SideNavigation/>

      {/* <ValidationComplete/> */}
        <PostAnswer/>
        {/* <ArticlesFilterContainer/> */}
        {/* <MyQuestionsAnswers/> */}
        {/* <ArticlesFilter/> */}
        {/* <Answers/> */}

      <RightContainer/>

    </div>
  );
};

export default Components;
