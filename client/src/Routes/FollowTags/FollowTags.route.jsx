import React from 'react';
import styles from "./FollowTags.module.scss"
import SideNavigation from '../../Components/sideNavigation/SideNavigation.component';
import RightContainer from '../../Components/RightContainer/RightContainer.component';
import FollowableTags from '../../Components/FollowableTags/FollowableTags.component';
import Tags from '../../Components/Tags/Tags.component';
const FollowTags = () => {
    const tagData = [
        {
            tag: "Html",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum blandit in odio elementum. Enim amet lorem tellus ultricies egestas etiam in. Dictumst accumsan nec sed ut felis diam gravida nam sed. ",
            questions: 34,
            questionToday: 23
        },
        {
            tag: "React",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum blandit in odio elementum. Enim amet lorem tellus ultricies egestas etiam in. Dictumst accumsan nec sed ut felis diam gravida nam sed. ",
            questions: 34,
            questionToday: 23
        },
        {
            tag: "Scss",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum blandit in odio elementum. Enim amet lorem tellus ultricies egestas etiam in. Dictumst accumsan nec sed ut felis diam gravida nam sed. ",
            questions: 34,
            questionToday: 23
        }, 
        {
            tag: "Mongodb",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum blandit in odio elementum. Enim amet lorem tellus ultricies egestas etiam in. Dictumst accumsan nec sed ut felis diam gravida nam sed. ",
            questions: 34,
            questionToday: 23
        }, 
        {
            tag: "1st Year",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum blandit in odio elementum. Enim amet lorem tellus ultricies egestas etiam in. Dictumst accumsan nec sed ut felis diam gravida nam sed. ",
            questions: 34,
            questionToday: 23
        },
        {
            tag: "Python",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum blandit in odio elementum. Enim amet lorem tellus ultricies egestas etiam in. Dictumst accumsan nec sed ut felis diam gravida nam sed. ",
            questions: 34,
            questionToday: 23
        }
    ]
    return (
        <div className={styles.container}>
            <SideNavigation />

            <div className={styles.outer}>
                <h2>Choose your Tags to follow</h2>
                <div className={styles.inner}>

                    {
                        tagData.map(i => (<FollowableTags tag={<Tags title={i.tag}/>} number={i.questions} today={i.questionToday}/>))
                    }

                </div>

            </div>

            <RightContainer />
        </div>
    );
};

export default FollowTags;