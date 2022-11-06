/* React */
import React, { useState } from 'react';
import axios from 'axios'
/* Styling */
import styles from "./Comment.module.scss";

/* Components */
import Icon from '../Icon/Icon';

/* Icons/Images */
import ic_flag from '../../Assets/Icons/ic_flag.svg';

const Comment = ({comment, auth, date , authId, id, func, flagged, questionId}) => {
    const user = sessionStorage.getItem("userName")

    const [flaggedVal, setFlaggedVal] = useState(flagged)
    console.log(flaggedVal)

    const testerFunction = async (e) => {
        let commId = id;
        setFlaggedVal(prevState => !prevState);
        console.log(id)
        let payload = {
            flagged: flaggedVal,
            commentId: commId,
        };

        try {
            await axios.patch(`http://localhost:5001/api/flagcomment/${questionId}`, payload)
            .then(res =>{
                console.log(res)
            })
        } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <div className={styles.container}>
            <div className={styles.left} id={id}>
                <Icon
                    className={flaggedVal ? styles.norm : styles.flagged}
                    icon={ic_flag}
                    onClick={testerFunction}
                />
            </div>
            <div className={styles.right}>
                <h5 className={styles.name}>{auth === user ? "You" : auth}</h5>
                <p className={styles.time}>{date}</p>
                <p className={styles.comment}>
                    {comment}
                </p>
            </div>
        </div>
    );
};

export default Comment;