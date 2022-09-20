import React from 'react';
import styles from "../Dropdown/Dropdown.module.scss";
import test from '../../Assets/car.jpg';

const DropDownNotification = () => {
    return (
        <div className={styles['container__notifications--content']}>
            <img
                src={test}
                alt=""
            />

            <div className={styles['container__notifications--content__right']}>
                <h1>Title of Question</h1>
                <h2>Someone added a comment</h2>
            </div>
        </div>
    );
};

export default DropDownNotification;