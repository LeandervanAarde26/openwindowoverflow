import React from 'react';
import Preview from '../Preview/Preview.component';
import styles from "./QuestionsContainer.module.scss";

const QuestionsContainer = () => {
    return (
        <>
            <div className={styles.outer}>
                <h3>Questions</h3>
                <div className={styles.container}>
                    <Preview 
                        goodQuestion={true}
                    />
                    <Preview />
                    <Preview />
                    <Preview />
                </div>
            </div>
        </>
    );
};
export default QuestionsContainer;