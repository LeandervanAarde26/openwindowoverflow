/* React */
import React from 'react';

/* Styling */
import styles from './PostAnswer.module.scss';

/* Components */
import Button from '../Button/Button.component'
// import Icon from '../Icon/Icon';
// import bold from "../../Assets/Icons/bold.png";

const PostAnswer = ({title, ...otherProps}) => {
    return (
        <div className={styles.container}>
      
            <h5>{title}Your Answer</h5>
            <div className={styles.areaContainer}>
                <textarea className={styles.textarea}  placeholder='enter answer'></textarea>
                <textarea className={styles.codearea} placeholder='enter code here'></textarea>
            </div>

            <div className={styles.buttonContainer}>
                <Button
                    buttonType={'primary'}
                    children={"Post answer"}
                />
            </div>
        </div>
    );
};

export default PostAnswer;