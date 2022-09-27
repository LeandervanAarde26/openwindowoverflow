import React from 'react';
import Badges from '../Badges/Badges.component';
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
                        resolved={true}
                    />
                    <Preview />
                    <Preview />
                    <Preview />
                    <Preview />
                    <Preview />
                    <Badges badgeType={"level1"}/>
                    <Badges badgeType={"level2"}/>
                    <Badges badgeType={"level3"}/>
                    <Badges badgeType={"level4"}/>
                    <Badges badgeType={"level5"}/>
                    <Badges badgeType={"level6"}/>
                    <Badges badgeType={"level7"}/>
                    <Badges badgeType={"level8"}/>
                    <Badges badgeType={"level9"}/>
                    <Badges badgeType={"bug"}/>
                    <Badges badgeType={"fox"}/>
                    <Badges badgeType={"happypc"}/>
                    <Badges badgeType={"idea"}/>
                    <Badges badgeType={"multiscreen"}/>
                    <Badges badgeType={"network"}/>
                    <Badges badgeType={"phoneapp"}/>
                    <Badges badgeType={"studybot"}/>
                    <Badges badgeType={"syntax"}/>
                    <Badges badgeType={"wireframe"}/>
                    <Badges badgeType={"teamwork"}/>


                </div>
            </div>
        </>
    );
};
export default QuestionsContainer;