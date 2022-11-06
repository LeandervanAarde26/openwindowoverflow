/* React */
import * as React from "react";
import { useNavigate } from "react-router";

/* Styling */
import styles from "./AdminConfirm.module.scss";

/* Components */
import Button from "../Button/Button.component";

/* Icons/Images */
import regImg from "../../Assets/remotework.png";

const AdminConfirm = ({ name, email, something }) => {

    return (
        <div className={styles.modalContainer}>

            
            <div className={styles.modalBody}>
                <img src={regImg} />
                    <h3>Welcome, {name}</h3>
                    <h6> Before we get started, please validate your account on: {email}</h6>

                    <div className={styles.buttonContainer}>
                  
                    {something}
               
                </div>
            </div>


        </div>
    );
};

export default AdminConfirm;