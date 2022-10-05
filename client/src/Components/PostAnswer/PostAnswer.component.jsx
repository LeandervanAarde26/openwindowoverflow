import React from 'react';
import styles from './PostAnswer.module.scss';
import Button from '../Button/Button.component'
// import Icon from '../Icon/Icon';
// import bold from "../../Assets/Icons/bold.png";

const PostAnswer = () => {

    return (
        <div className={styles.container}>
            <h5>Your answer</h5>
            <div className={styles.icons}>
                {/* <Icon 
                icon={bold}
                /> */}
            </div>

        <textarea></textarea>

            <div className={styles.button}>
                <Button
                    buttonType={'primary'}
                    children={"Post answer"}
                />
            </div>
        </div>
    );
};

export default PostAnswer;