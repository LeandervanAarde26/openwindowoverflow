import React from 'react';
import styles from "./PasswordResetValidation.module.scss"
import Button from '../Button/Button.component';
import { useNavigate } from 'react-router';
const PasswordResetValidation = () => {
    const navigate = useNavigate()

    const goHome = () =>{
        navigate("/")
    }

    return (
        <div className={styles.container}>
                <div className={styles.body}>
                    <div className={styles.imageContainer}> </div>
                    <h3>Password has been reset</h3>
                    <p>Let's get back to coding!</p>
                    <Button
                        buttonType={'black'}
                        children={'Go back to login'}
                        onClick={goHome}
                    />
                </div>
        </div>
    );
};

export default PasswordResetValidation;