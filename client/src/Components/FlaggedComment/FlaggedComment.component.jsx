/* React */
import React from 'react';
import { useNavigate } from 'react-router';

/* Styling */
import styles from './FlaggedComment.module.scss';

/* Components */
import Icon from '../Icon/Icon';
import Button from '../Button/Button.component';

/* Icons/Images */
import ic_user from '../../Assets/Icons/ic_user.svg';
import ic_flag from '../../Assets/Icons/ic_flag.svg';
import ic_bin from '../../Assets/Icons/ic_bin.svg';

const FlaggedComment = (props) => {
    const navigate = useNavigate()

    const { commentTitle, questionId, askedUser, commentUser } = props

    const goToQuestion = () => { navigate(`/Question/${questionId}`) }

    return (
        <div className={styles.container}>
            <div className={styles.container__top}>
                <h4>{commentTitle}</h4>

            </div>
            <div className={styles.container__info}>
                <div className={styles['container__info--content']}>
                    <Icon
                        icon={ic_user}
                    />

                    <p><strong>{askedUser}</strong> asked question</p>
                </div>
                <div className={styles['container__info--content']}>
                    <Icon
                        icon={ic_user}
                    />


                    <p><strong>{commentUser}</strong> commented</p>
                </div>
            </div>
            <div className={styles.container__bottom}>
                <Icon
                    icon={ic_flag}
                />
                <Icon
                    className={styles.bin}
                    icon={ic_bin}
                />
                <Button
                    id={questionId}
                    buttonType='primary'
                    children='View'
                    onClick={goToQuestion}
                />
            </div>
        </div>
    );
};

export default FlaggedComment;