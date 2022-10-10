import React from "react";
import styles from "./AnswerBox.module.scss";

const AnswerBoxComponent = () => {
  return (
    <div className={styles.container}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste velit
        dolores quas, totam sed iure deleniti cupiditate ipsa voluptatibus eius
        <br />
        assumenda itaque, corrupti hic libero sapiente consectetur obcaecati
        minima enim
      </p>
      <div className={styles.answerBox}>Code section</div>
    </div>
  );
};

export default AnswerBoxComponent;
