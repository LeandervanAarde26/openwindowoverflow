/* React */
import React from 'react';

/* Styling */
import styles from './FlaggedComment.module.scss';

/* Components */
import Icon from '../Icon/Icon';
import Button from '../Button/Button.component';

/* Icons/Images */
import ic_user from '../../Assets/Icons/ic_user.svg';
import ic_flag from '../../Assets/Icons/ic_flag.svg';

const FlaggedComment = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container__top}>
                <h4>User flagged users comment on question This is thsfas fasfsfa sfasfe title of the question that the user h</h4>
            </div>
            <div className={styles.container__info}>
                <div className={styles['container__info--content']}>
                    <Icon
                        icon={ic_user}
                    />

                    <p><strong>User</strong> asked question 5 hours ago</p>
                </div>
                <div className={styles['container__info--content']}>
                    <Icon
                        icon={ic_user}
                    />

                    <p><strong>User</strong> asked question 5 hours ago</p>
                </div>
            </div>
            <div className={styles.container__bottom}>
                <Icon
                    icon={ic_flag}
                />
                <Button
                    buttonType='primary'
                    children='View'
                />
            </div>
        </div>
    );
};

export default FlaggedComment;