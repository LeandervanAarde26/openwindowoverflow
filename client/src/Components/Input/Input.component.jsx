/* React */
import React from 'react';

/* Styling */
import styles from "./Input.module.scss"
/*  
This input is meant for things such as the login form, if you are looking 
for the other input component please go to _____
*/
const Input = ({ id, label, ...otherprops }) => {
    return (
        <>

            <div className={styles.group}>
                {
                    label &&
                    <label htmlFor={label} className={`${otherprops.value ? styles.shrink : ''} ${styles.formInputLabel}`} id={id}>{label}</label>
                }
                <br />
                <input className={styles.formInput} {...otherprops}/>
            </div>
            <br />

        </>
    );
};

export default Input;