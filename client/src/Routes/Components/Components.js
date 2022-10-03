import React from "react";
import AdSenseContainer from "../../Components/AdSenseContainer/AdSenseContainer.component";
import Answers from "../../Components/Answers/Answers.component";
import ArticlesContainer from "../../Components/ArticlesContainer/ArticlesContainer.component";
import ArticlesFilter from "../../Components/ArticlesFilter/ArticlesFilter.component";
import ArticlesFilterContainer from "../../Components/ArticlesFilterContainer/ArticlesFilterContainer.component";
import Back from "../../Components/BackButton/Back.component";
import Badges from "../../Components/Badges/Badges.component";
import Button from "../../Components/Button/Button.component";
import Comment from "../../Components/Comment/Comment.component";
import CommentsContainer from "../../Components/CommentsContainer/CommentsContainer.component";
import styles from "./Components.module.scss";

const Components = () => {
  return (
    <div className={styles.container}>
        <CommentsContainer
            children={<Comment/>}
        />
    </div>
  );
};

export default Components;
