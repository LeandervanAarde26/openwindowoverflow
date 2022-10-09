import * as React from "react";
import * as ReactDOM from "react-dom";
import styles from "./RegComplete.module.scss"
import regImg from "../../Assets/remotework.png"
import Button from "../Button/Button.component";
import { useNavigate } from "react-router";

const RegComplete = ({ name, email }) => {
    const navigate = useNavigate()
    return (
        <div className={styles.modalContainer}>
            <div className={styles.modalBody}>
                <img src={regImg} />
                    <h3>Welcome, {name}</h3>
                    <h6> Before we get started, please validate your account on: {email}</h6>

                    <div className={styles.buttonContainer}>
                    {/* Link didnt work because it is looking for a local path to redirect ti, a href takes anylink */}
                    {/* <a href="https://mail.google.com/mail/u/0/" target={"_self"}> */}
                        <Button
                            buttonType={"black"}
                            children={"validate my account"}
                            onClick={() => { navigate("/UserValidation")}}
                        />
                    {/* </a> */}
                </div>
            </div>
        </div>
    );
};

export default RegComplete;