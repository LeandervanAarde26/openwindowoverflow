import React, { useState } from 'react';
import styles from "./Newpassword.module.scss"
import newPass from "../../Assets/newPass.png";
import { useNavigate } from 'react-router';
import axios from 'axios';
import Input from '../../Components/Input/Input.component';
import Button from '../../Components/Button/Button.component';

const defaultValues = {
    password: '',
    confirmPassword: ''
}

const Newpassword = () => {

    const [values, setValues] = useState(defaultValues)
    const { password, confirmPassword } = values
    const [error, setError] = useState(false);
    const [clickable, setClickable] = useState(true);
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target

        const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let correctEmail =
            value.includes("@openwindow.co.za") ||
            value.includes("@virtualwindow.co.za");
        const emailCheck = emailRegex.test(value);


        setValues({ ...values, [name]: value })

        if (name == "email" && value.length > 2) {
            if (emailCheck && correctEmail) {
                setError(false);
                setClickable(true);
            } else {
                setError(true);
                setClickable(false);
            }
        } else {
            setError(false);
            setClickable(true);
        }
    }



    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <img
                    src={newPass}
                    alt={"Forgot password"}
                />
            </div>

            <div className={styles.right}>
                <h3>Enter details below to reset your password!</h3>
                <Input
                    label={error ? " Passwords do not match" : "password"}
                    value={password}
                    type="password"
                    name="password"
                    required={true}
                    onChange={handleChange}
                />

                <Input
                    label={"Confirm Passwords"}
                    value={confirmPassword}
                    type="password"
                    name="confirmPassword"
                    required={true}
                    onChange={handleChange}
                />

                <div className={styles.button}>
                    {
                        clickable
                            ?
                            <Button
                                buttonType={'primary'}
                                children={'Reset Password'}
                            // onClick={resetPassword}
                            />
                            :
                            null
                    }
                </div>
            </div>
        </div>
    );
};

export default Newpassword;