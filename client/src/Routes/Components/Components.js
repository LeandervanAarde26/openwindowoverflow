import React from "react";
import AdSenseContainer from "../../Components/AdSenseContainer/AdSenseContainer.component";
import Answers from "../../Components/Answers/Answers.component";
import styles from "./Components.module.scss";

const Components = () => {
  return (
    <div className={styles.container}>
      <Answers />
    </div>
  );
};

export default Components;
