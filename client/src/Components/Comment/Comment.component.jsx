import React from 'react';
import styles from "./Comment.module.scss";
import Icon from '../Icon/Icon';
import ic_flag from '../../Assets/Icons/ic_flag.svg';
import Button from '../Button/Button.component';

const Comment = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Icon
                    icon={ic_flag}
                />
            </div>
            <div>
                <h5 className={styles.name}>Leander van Aarde</h5>
                <p className={styles.time}>29 June 2021 @ 21:00</p>
                <p className={styles.comment}>Please be clearer with this this this and this because this is difficult to understand and I don't quite understand what you're trying to achieve with this this this and also with this. So how are you going to do this.
                    Please be clearer with this this this and this because this is difficult to understand and I don't quite understand what you're trying to achieve with this this this and also with this. So how are you going to do this
                    Please be clearer with this this this and this because this is difficult to understand and I don't quite understand what you're trying to achieve with this this this and also with this. So how are you going to do this
                    Please be clearer with this this this and this because this is difficult to understand and I don't quite understand what you're trying to achieve with this this this and also with this. So how are you going to do this
                </p>
            </div>
        </div>
    );
};

export default Comment;

{/* 
<h4>Leander van Aarde</h4>
            <h5>29 June 2021 @ 21:00</h5>
            <p>Please be clearer with this this this and this because this is difficult to understand and I don't quite understand what you're trying to achieve with this this this and also with this. So how are you going to do this</p> */}