import React from 'react';
import styles from "./MyQuestionsAnswersContainer.module.scss"

const MyQuestionsAnswersContainer = () => {
    const mockData = [
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
                <div>
                        Hello
                    </div>
                    <div>
                        Hello
                    </div>
                    <div>
                        Hello
                    </div>
                </div>
                <div className={styles.right}>
                <h4>Answers</h4>
                    <div>
                        Hello
                    </div>
                    <div>
                        Hello
                    </div>
                    <div>
                        Hello
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyQuestionsAnswersContainer;

