/* React */
import React from 'react';
import axios from 'axios'
/* Styling */
import styles from "./Comment.module.scss";

/* Components */
import Icon from '../Icon/Icon';

/* Icons/Images */
import ic_flag from '../../Assets/Icons/ic_flag.svg';

const Comment = ({comment, auth, date , authId, id}) => {
    const user = sessionStorage.getItem("userName")
    const testerFunction = (e) =>{
        let commentId = e.target.parentNode.parentNode.id
        let payload = {
            flagged: true
        }
        axios.patch('http://localhost:5001/api/flagcomment/' + commentId, payload)
        .then(res =>{
            console.log(res)

        })
        .catch(err => console.log(err))
    }
    return (
        <div className={styles.container} id={id}>
            <div className={styles.left}>
                <Icon
                    id={id}
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