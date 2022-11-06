import React, { useState } from 'react';
import Button from '../Button/Button.component';
import RightContainer from '../RightContainer/RightContainer.component';
import SideNavigation from '../sideNavigation/SideNavigation.component';
import styles from "./AddArticle.module.scss";
import axios from 'axios';

const defaultVals = {
    title: '',
    link: '',
    description: '',
}

const AddArticle = () => {
    const [newValues, setNewValues] = useState(defaultVals)
    const { title, link, description } = newValues
    const user = sessionStorage.getItem('currentUser');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewValues({ ...newValues, [name]: value })
    }

    console.log(newValues)

    const addArticle = () =>{
        let payload = {
            description: newValues.description,
            title: newValues.title,
            link: newValues.link
        }
        console.log(payload)
        axios.post(`http://localhost:5001/api/addarticles/${user}`, payload)
        .then(res => {
            console.log(res)
        })
        .catch(err =>{
            console.log(err)
        })
    }


    return (
        <div className={styles.container}>
            <SideNavigation />
            <div className={styles.content}>
                <div className={styles.top}>
                    <h3>Add an Article</h3>
                </div>
                <div className={styles.inpContainer}>
                    <input
                        className={styles.input}
                        placeholder='Enter Title'
                        value={title}
                        name={"title"}
                        onChange={handleChange}
                    />
                    <input
                        className={styles.input}
                        placeholder='Enter Link'
                        value={link}
                        name={"link"}
                        onChange={handleChange}
                    />
                    <textarea
                        placeholder='Enter Description...'
                        value={description}
                        name={"description"}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.button}>
                    <Button
                        buttonType={'primary'}
                        children={'Post Article'}
                        onClick={addArticle}
                    />
                </div>
            </div>

            <RightContainer />
        </div>
    );
};

export default AddArticle;