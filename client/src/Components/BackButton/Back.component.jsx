import React from 'react';
import styles from "./Back.module.scss"
import { useNavigate } from 'react-router';

const Back = () => {
    const navigate = useNavigate()
    const goBack = () =>{
        navigate(-1)
    }
    return (
        <div className={styles.backButton} onClick={goBack}>
            <span>&#10094; Back</span>
        </div>
    );
};

export default Back;