import React, { useContext } from 'react';
import styles from "./ValidateUser.module.scss";
import theImage from "../../Assets/LoginImage.png"
import { RegisterContext } from '../../Contexts/Register.context';
import Button from '../../Components/Button/Button.component';

const ValidateUser = () => {
    const { currentUser } = useContext(RegisterContext)
    const curr = currentUser.currentUser
    console.log(curr)
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <img className='img' src={theImage} alt={"ValidationImage"} />
            </div>
            <div className={styles.right}>
                <h3>Welcome, {curr.username}!
                    <br />
                    Before we get started, please validate your account on: {curr.email}
                </h3>

                <div className={styles.buttonContainer}>
                    {/* Link didnt work because it is looking for a local path to redirect ti, a href takes anylink */}
                    <a href="https://mail.google.com/mail/u/0/" target={"_self"}>
                        <Button
                            buttonType={"black"}
                            children={"validate my account"}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ValidateUser;