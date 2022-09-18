import React, { useState } from 'react';
import styles from "./Register.module.scss"
import Input from '../../Components/Input/Input.component';
import { Outlet, useNavigate } from 'react-router';
import Button from '../../Components/Button/Button.component';
import Image from '../../Assets/RegisterImage.png';

const defaultValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    year: ''
}

const Register = () => {

    //RANDOM USERNAME GENERATOR

    const [formValues, setFormValues] = useState(defaultValues)
    const { username, email, password, confirmPassword, year } = formValues;
    const navigate = useNavigate()
    const [error, setError] = useState(false);
    const [passErrr, setpasswordError] = useState(false)
    const [clickable, setClickable] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }

    const SignIn = () => {
        navigate("/")
    }

    const test = () => {
        navigate(("/Home"))
    }

    const validateEmail = (e) => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const { name, value } = e.target;
        //To test if the email is indeed an email
        const checker = emailRegex.test(value);
        // This splits the email into two , returning @virtualwindow or whatever is in the email
        const atPosition = value.indexOf('@');
        let mailHost = value.slice(atPosition)
        if (checker === true) {
            if (mailHost == "@virtualwindow.co.za" || mailHost == '@openwindow.co.za') {
                setError(false);
                setClickable(true)

            } else {
                setError(true)
                setClickable(false)
            }
        } else {
            setError(true)
            setClickable(false)
        }
    }

    const validatePassword = (e) => {
        const { name, value } = e.target;
        if (formValues.password == formValues.confirmPassword) {
            setpasswordError(false)

        } else {
            setpasswordError(true)
        }
    }

    console.log(formValues)

    return (
        <div className={styles.outer}>
            <div className={styles.left}>

                <h2 className={styles.heading}>Sign Up</h2>
                <form>
                    <Input
                        label={"Username"}
                        value={username}
                        type="text"
                        name="username"
                        required={true}
                        onChange={handleChange}
                        onBlur={validateEmail}
                        placeholder="eg. "
                    />

                    <Input
                        id={error ? styles.err : ""}
                        label={error ? "Invalid email, please try again" : "Email"}
                        value={email}
                        type="email"
                        name="email"
                        required={true}
                        onChange={handleChange}
                        onBlur={validateEmail}
                    />

                    <Input
                        label={"Year of studies"}
                        value={year}
                        type="number"
                        name="year"
                        required={true}
                        onChange={handleChange}
                        placeholder="eg. 2"
                        min={1}
                        max={4}
                    />

                    <Input
                        label={"Password"}
                        value={password}
                        type="password"
                        name="password"
                        required={true}
                        onChange={handleChange}
                    />

                    <Input
                        id={passErrr ? styles.err : ""}
                        label={passErrr ? "Passwords do not match, try again" : "Confirm password"}
                        value={confirmPassword}
                        type="password"
                        name="confirmPassword"
                        required={true}
                        onChange={handleChange}

                    />
                </form>

                {
                    clickable ?
                        <>
                            <p className={styles.reset}>Forgot password? <br /> <span>Click here to reset</span></p>
                            <Button
                                buttonType={'black'}
                                children={"Sign up"}
                                buttonSize={styles.buttonSize}
                                onClick={test}
                            />
                            <p className={styles.option}>Already a user on __ ?</p>

                            <Button
                                buttonType={'secondary'}
                                children={'Sign in'}
                                buttonSize={styles.secondary}
                                onClick={SignIn}
                            />
                        </>

                        :
                        <>
                        </>
                }
            </div>
            <div className={styles.right}>
 
            </div>

        </div>
    );
};

export default Register;