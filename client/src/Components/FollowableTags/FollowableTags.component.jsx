/* React */
import React, {useContext} from 'react';
import { useState } from 'react';

/* Styling */
import styles from "./FollowableTags.module.scss"

/* Context */
import { RegisterContext } from '../../Contexts/Register.context';

/* Components */
import Button from '../Button/Button.component';

const FollowableTags = ({ tag, number, today, desc, }) => {
    const {addtoTags} = useContext(RegisterContext)

    const addTag = () => {
        const tagName = tag.props.title
        addtoTags(tagName)
    }

    return (
        <div className={styles.container}>
            <div className={styles.tag}>
                {tag}
                <Button
                    buttonType={"black"}
                    children={"Follow"}
                    buttonSize={styles.height}
                    onClick={addTag} 
                />
            </div> 
 
            <div className={styles.informationContainer}>
                <p className={styles.desc}>{desc}</p>
            </div>
        </div>
    );
};

export default FollowableTags;