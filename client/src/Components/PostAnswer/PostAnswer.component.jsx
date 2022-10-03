import React from 'react';
import styles from './PostAnswer.module.scss';
import Button from '../Button/Button.component'

const PostAnswer = () => {

    return (
        <div className={styles.container}>
            <h5>Your answer</h5>
            <div className={styles.icons}>
                
            </div>

                <div className={styles.information}>
                </div>

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

// /* Icons/Images */
// import logo from '../../Assets/Icons/testLogo.svg';
// import trophy from "../../Assets/Icons/ic_trophy.svg";
// import inbox from "../../Assets/Icons/ic_inbox.svg";
// import Icon from '../Icon/Icon';


{/* <Icon
className={styles['containerOuter__login--trophy']}
icon={inbox}
/> */}
