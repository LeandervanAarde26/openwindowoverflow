/* React */
import React from "react";
import { useEffect } from "react";
/* Styling */
import styles from "./QuestionsContainer.module.scss";
import axios from "axios";
/* Components */
import Preview from "../Preview/Preview.component";
import IntroductionHome from "../IntroductionHome/IntroductionHome.component";

const QuestionsContainer = () => {
  useEffect(() => {
    axios
      .get("http://localhost:5001/api/route")
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.outer}>
      <h3>Questions</h3>
      <div className={styles.container}>
        <Preview goodQuestion={true} resolved={true} />
        <Preview />
        <Preview />
        <Preview />
        <Preview />
        <Preview />
      </div>
    </div>
  );
};
export default QuestionsContainer;
