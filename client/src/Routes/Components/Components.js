import React from "react";
import AdSenseContainer from "../../Components/AdSenseContainer/AdSenseContainer.component";
import Answers from "../../Components/Answers/Answers.component";
import ArticlesContainer from "../../Components/ArticlesContainer/ArticlesContainer.component";
import ArticlesFilter from "../../Components/ArticlesFilter/ArticlesFilter.component";
import styles from "./Components.module.scss";

const Components = () => {
  return (
    <div className={styles.container}>
        <ArticlesFilter/>
    </div>
  );
};

export default Components;
