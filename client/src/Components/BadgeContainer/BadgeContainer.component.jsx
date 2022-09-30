import React from "react";
import Badges from "../Badges/Badges.component";
import styles from './BadgeContainer.module.scss'


const BadgeContainer = () => {
    return (<>
        <div className={styles.main}>
            <div className={styles.title}>
                <h3>Badges</h3>
            </div>
            <div className={styles.badge_row}>
                <Badges badgeType={"network"} />
                <Badges badgeType={"level2"} />
                <Badges badgeType={"level3"} />
                <Badges badgeType={"level4"} />
                <Badges badgeType={"level5"} />
                <Badges badgeType={"level6"} />
                <Badges badgeType={"level7"} />
                <Badges badgeType={"level8"} />
                <Badges badgeType={"level9"} />
                <Badges badgeType={"bug"} />
                <Badges badgeType={"fox"} />
                <Badges badgeType={"happypc"} />
                <Badges badgeType={"idea"} />
                <Badges badgeType={"multiscreen"} />
                <Badges badgeType={"network"} />
                <Badges badgeType={"phoneapp"} />
                <Badges badgeType={"studybot"} />
                <Badges badgeType={"syntax"} />
                <Badges badgeType={"wireframe"} />
                <Badges badgeType={"teamwork"} />
            </div>
        </div>
    </>)
}

export default BadgeContainer;