import React from 'react';
import styles from "./TopRatedQuestion.module.scss"

const TopRatedQuestion = () => {

    let timeAsked = "5 hours ago";

    return (<>
        <div className={styles.container}>

            {/* Majority of content is be inserted dynamically and adjusted, the following
            is dummy place holder, to display in the same positions p tag content
            must be replaced */}
            <div className={styles.votes}>

                <div className={styles.choice}>
                    {/* INSERT JSX INTO P TAG BELOW FOR DYNAMIC VOTING TO DISPLAY */}
                    <p className={styles.counter}>20</p>
                </div>

                <div className={styles.checkbox}>
                    {/* INSERT JSX INTO P TAG BELOW FOR DYNAMIC VOTING TO DISPLAY */}
                    <p className={styles.counter}>2</p>
                </div>
            </div>


            <div className={styles.content}>
                <div className={styles.questionText}>
                    {/* INSERT JSX INTO P TAG BELOW FOR DYNAMIC QUESTIONS TO DISPLAY, WILL LATER WORK ON TRUNCATING AND ELLIPSIS FOR LONGER QUESTIONS TO FIT */}
                    <p> Hi there! this will be the question, but it will be inserted by dynamic js code which means this markup is only for test purposes that will be tested lioke a test</p>
                </div>
                <div className={styles.questionUser}>

                    <div className={styles.userIcon}></div>
                    {/* INSERT JSX INTO P TAG BELOW FOR DYNAMIC USERNAME & TIME ASKED TO DISPLAY */}
                    <p className={styles.userName}>User</p><p className={styles.asked}>Asked Question {timeAsked}</p>
                </div>
                <div className={styles.questionRating}>
                    <div className={styles.star}></div>
                    <p className={styles.goodQuestion}>Good Question</p>
                </div>
            </div>
        </div>
    </>)
}

export default TopRatedQuestion;