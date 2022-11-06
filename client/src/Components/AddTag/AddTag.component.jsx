import React from 'react';
import styles from "./AddTag.module.scss";
import Input from '../Input/Input.component';
import Tags from '../Tags/Tags.component';
import { useState } from 'react';
import FollowedTags from '../FollowedTagsComponent/FollowedTags.component';
import FollowableTags from "../FollowableTags/FollowableTags.component"
import Button from '../Button/Button.component';

const defaultVals = {
    tagName: '',
    tagDescription: ''
}

const AddTag = () => {
const [formVals, setFormVals] = useState(defaultVals)
const {tagName, tagDescription} = formVals



    const handleChange = (e) => {
    let {name, value} = e.target
    setFormVals({...formVals, [name]: value})
        
    }

    console.log(formVals)


    return (
        <div className={styles.container}>
            <h3>Create a Tag</h3>
       
            <p className={styles.note}>Note*</p>
            <p>Tags added here will become avalible to all users when setting up and account or when creating
                a question, tags should represent technologies, languages, topics or other relevant categorisation
            </p>
       
            <Input
                label={"Enter Tag Name"}
                name="tagName"
                type="text"
                value={tagName}
                onChange={handleChange}
            />
            <Input
                label={"Tag Description"}
                name="tagDescription"
                type="text"
                value={tagDescription}
            onChange={handleChange}
            />
            <h4>The new Tag will look like this:</h4>
            <FollowableTags
                tag={tagName}
                desc={tagDescription}
            />


            <div className={styles.buttonContainer}>
                <Button
                    buttonType={"primary"}
                    children={"Add tag"}
                />
            </div>
        </div>
    );
};

export default AddTag;