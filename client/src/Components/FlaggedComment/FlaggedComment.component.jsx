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
import ic_flag from '../../Assets/Icons/ic_flag.svg';
import ic_bin from '../../Assets/Icons/ic_bin.svg';
import axios from 'axios';

const FlaggedComment = (props) => {
    const navigate = useNavigate()
    const { update, setUpdate } = useContext(RerenderContext);

    const goToQuestion = () => { navigate(`/Question/${props.questionId}`) }

    const deleteFunction = (e) =>{
       let  arr = props.commId.filter(x => x !== null);
        console.log("fired")
    //    console.log(arr[0])

       axios.patch(`http://localhost:5001/api/deletecomment/${arr[0]}/${props.questionId}`)
       .then(res =>{
        console.log(res)
        setUpdate(prev => !prev)
       })
       .catch(err =>{
        console.log(err)
       })   
    }

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
                    onClick={goToQuestion}
                />
                {
                    props.flags > 0 &&

                    <p>
                        {
                            props.flags < 2
                            ? props.flags + 'Flag'
                            : props.flags + 'Flags'
                        }
                    </p>
                }


                <Icon
                    className={styles.bin}
                    icon={ic_bin}
                    onClick={deleteFunction}
                />
            </div>
        </div>
    );
};

export default FlaggedComment;