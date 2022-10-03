import React, {useContext} from 'react';
import { useState } from 'react';
import Button from '../Button/Button.component';
import styles from "./FollowableTags.module.scss"
import { RegisterContext } from '../../Contexts/Register.context';
// const defaultArr = []

const FollowableTags = ({ tag, number, today, desc }) => {
    const {addtoTags} = useContext(RegisterContext)

    const addTag = () => {
        const tagName = tag.props.title
        addtoTags(tagName)
    }

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
                <p className={styles.desc}>{desc} </p>
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