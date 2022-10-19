/* React */
import React from 'react';

/* Styling */
import styles from './PostAnswer.module.scss';

/* Components */
import Button from '../Button/Button.component'
// import Icon from '../Icon/Icon';
// import bold from "../../Assets/Icons/bold.png";

const PostAnswer = ({code, answer, handleClick, ...otherProps}) => {
    return (
        <div className={styles.container}>
      
            <h5>Your Answer</h5>
            <div className={styles.areaContainer}>
                <textarea className={styles.textarea}  placeholder='enter answer' name={'answer'} value={answer} {...otherProps}></textarea>
                <textarea className={styles.codearea} placeholder='enter code here' name={'code'} value={code} {...otherProps}></textarea>
            </div>

            <div className={styles.buttonContainer}>
                <Button
                    buttonType={'primary'}
                    children={"Post answer"}
                    onClick={handleClick}
                />
            </div>
        </div>
    );
};

export default PostAnswer;