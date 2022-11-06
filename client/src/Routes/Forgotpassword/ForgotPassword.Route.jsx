import React, { useState } from 'react';
import styles from "./ForgotPassword.module.scss";
import forgot from "../../Assets/Forgot.png"
import Input from '../../Components/Input/Input.component';
import Button from '../../Components/Button/Button.component';
import axios from 'axios';
import { useNavigate } from 'react-router';

const defaultValues = {
    email: ''
}

const ForgotPassword = () => {

    const [values, setValues] = useState(defaultValues)
    const { email} = values
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

    const resetPassword = () =>{
        let payload = values.email
        navigate("/updatepassword")

        // axios.post('http://localhost:5001/api/resetpassword', payload)
        // .then(res => {
        //     console.log(payload)
        //     console.log(res)
        //     // setOpenModal(prev => !prev)
        // })
        // .catch(err => {
        //     console.log(err)
        // })
    }

    console.log(values)

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <img
                    src={forgot}
                    alt={"Forgot password"}
                />
            </div>

            <div className={styles.right}>
                <h3>Enter details below to reset your password!</h3>
                <Input
                    label={error ? " Invalid email" : "email"}
                    value={email}
                    type="email"
                    name="email"
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
                                onClick={resetPassword}
                            />
                            :
                            null
                    }

                    <Button
                        buttonType={'outline'}
                        children={'Go Back'}
                    />
                </div>

            </div>
        </div>
    );
};

export default ForgotPassword;