import React from 'react';
import styles from "./MyQuestionsAnswersContainer.module.scss"
import MyQuestionsAnswers from '../MyQuestionsAnswers/MyQuestionsAnswers.component';

const MyQuestionsAnswersContainer = () => {
    const mockData = [
        {
            title: "This is the title of my question ",
            tags: ["Html, css, scss, React"],
            votes: [],
            answers: [],
            resolved: false,
        },
        {
            title: "This is the title of my question",
            tags: ["Html, css, scss, React"],
            votes: 0,
            answers: 0,
            resolved: false,
        },
        {
            title: "This is the title of my question",
            tags: ["Html, css, scss, React"],
            votes: 0,
            answers: 0,
            resolved: false,
        },
    ]

    return (
        <div className={styles.outer}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h4>Questions</h4>
                <MyQuestionsAnswers/>
                <MyQuestionsAnswers/>
                <MyQuestionsAnswers/>
                <MyQuestionsAnswers/>
                </div>
                <div className={styles.right}>
                <h4>Answers</h4>
                <MyQuestionsAnswers/>
                <MyQuestionsAnswers/>

                </div>
            </div>
        </div>
    );
};

export default MyQuestionsAnswersContainer;

