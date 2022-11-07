/* React */
import React, {useContext} from 'react';
import { useNavigate } from 'react-router';

/* Styling */
import styles from './FlaggedComment.module.scss';

/* Components */
import Icon from '../Icon/Icon';
import Button from '../Button/Button.component';
import { RerenderContext } from "../../Contexts/Rerenders.context";

/* Icons/Images */
import ic_user from '../../Assets/Icons/ic_user.svg';
import ic_bin from '../../Assets/Icons/ic_bin.svg';


const FlaggedComment = (props) => {
    const navigate = useNavigate()
    const { update, setUpdate } = useContext(RerenderContext);

    return (
        <div className={styles.container}>
            <div className={styles.container__top}>
                <h4>{props.commentTitle}</h4>
            </div>
            <div className={styles.container__info}>
                <div className={styles['container__info--content']}>
                    <Icon
                        icon={ic_user}
                    />

                    <p><strong>{props.askedUser}</strong> asked question</p>
                </div>
                <div className={styles['container__info--content']}>
                    <Icon
                        icon={ic_user}
                    />

                    <p><strong>{props.commentUser}</strong> commented</p>
                </div>
            </div>
            <div className={styles.container__bottom}>
                <Button
                    id={props.questionId}
                    buttonType='primary'
                    children='View'
                    onClick={props.goToQuestion}
                />
                {
                    props.flags > 0 &&

                    <p>
                        {
                            props.flags < 2
                            ? props.flags + ' Flag'
                            : props.flags + ' Flags'
                        }
                    </p>
                }

                <Icon
                    className={styles.bin}
                    icon={ic_bin}
                    onClick={props.onClick}
                />
            </div>
        </div>
    );
};

export default FlaggedComment;