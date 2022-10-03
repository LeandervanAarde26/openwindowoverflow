import React from "react";
import styles from "./AskQuestion.module.scss";

const AskQuestionComponent = () => {
  return (
    <>
      <div className={styles.container}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
          Quibusdam voluptatem quae eum at, sint magnam, possimus quam
          voluptates maiores omnis <br />
          id consectetur officia delectus culpa. Veritatis sequi doloremque
          deserunt vel.
        </p>

        <div className="code-sec">
          <h3 style={{ textAlign: "center", marginTop: 10 }}>Code section</h3>
        </div>
      </div>
    </>
  );
};

export default AskQuestionComponent;
