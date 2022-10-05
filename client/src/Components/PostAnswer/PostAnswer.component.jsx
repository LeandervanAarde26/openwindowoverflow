import React from 'react';
import styles from './PostAnswer.module.scss';
import Button from '../Button/Button.component'
// import Icon from '../Icon/Icon';
// import bold from "../../Assets/Icons/bold.png";

const PostAnswer = () => {

    return (
        <div className={styles.container}>
          

            <div className={styles.areaContainer}>
            <h5>Your answer</h5>
    
                <div className={styles.icons}>
                    {/* <Icon 
                icon={bold}
                /> */}
                </div>
                <textarea></textarea>
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