import React from 'react';
import { useState } from 'react';
import Button from '../Button/Button.component';
import styles from "./FollowableTags.module.scss"
const defaultArr = []

const FollowableTags = ({ tag, number, today }) => {
    const [theTags, setTheTags] = useState()

    const addTag = (e) => {
        const tagName = tag.props.title
        const exists = defaultArr.find(i => i === tagName);
        if (exists) return;
        defaultArr.push(tagName)
        setTheTags(defaultArr);
    }

    console.log(theTags)
    return (
        <div className={styles.container}>

            <div className={styles.tagsContainer}>
                {tag}
                <Button
                    buttonType={"black"}
                    children={"Follow"}
                    buttonSize={styles.height}
                    onClick={addTag} />
            </div>
 
            <div className={styles.informationContainer}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum blandit in odio elementum. Enim amet lorem tellus ultricies egestas etiam in. Dictumst accumsan nec sed ut felis diam gravida nam sed. </p>
                <br />
                <p>
                    <span>{number}</span>
                    <br />
                    <strong>Questions</strong>
                    <br />
                    <br />
                    <span>{today}</span>
                    <br />
                    <strong>Asked today</strong>
                </p>
            </div>
        </div>
    );
};

export default FollowableTags;