import React from "react";
import Tags from "../Tags/Tags.component";
import styles from './FollowedTags.module.scss'


const FollowedTags = () => {
    return(<>
    <div className={styles.main}>
        <div className={styles.title}>
            Followed tags
        </div>
        <div className={styles.tags}>
            <Tags title={'html'}/>
            <Tags title={'css'}/>
            <Tags title={'scss'}/>
            <Tags title={'React'}/>
            <Tags title={'Javascript'}/>
            <Tags title={'React'}/>
            <Tags title={'Angular'}/>
            <Tags title={'Kotlin'}/>
            <Tags title={'Swift'}/>
            <Tags title={'SwiftUI'}/>

        </div>
    </div>
    </>)
}

export default FollowedTags;