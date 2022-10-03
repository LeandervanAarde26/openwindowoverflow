import React from "react";
import AdSenseContainer from "../../Components/AdSenseContainer/AdSenseContainer.component";
import Answers from "../../Components/Answers/Answers.component";
import ArticlesContainer from "../../Components/ArticlesContainer/ArticlesContainer.component";
import ArticlesFilter from "../../Components/ArticlesFilter/ArticlesFilter.component";
import ArticlesFilterContainer from "../../Components/ArticlesFilterContainer/ArticlesFilterContainer.component";
import Back from "../../Components/BackButton/Back.component";
import Badges from "../../Components/Badges/Badges.component";
import styles from "./Components.module.scss";

const Components = () => {
  return (
    <div className={styles.container}>
        <Badges
            title={"Murmurer"}
            description={"Post and answer at least 5 tickets."}
        />
    </div>
  );
};

export default Components;
