import React from 'react';
import styles from "../DropDownNotification/DropDownNotification.module.scss";
import test from '../../Assets/car.jpg';

const DropDownNotification = (props) => {
    return (
        <div className={styles['container--content']}>
            <img
                src={test}
                alt=""
            />

            <div className={styles['container--content__right']}>
                <h5>{props.title}</h5>
                <h6>{props.notification}</h6>
            </div>
        </div>
    );
};

export default DropDownNotification;