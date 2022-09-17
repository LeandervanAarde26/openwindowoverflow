import React, { useState } from 'react';
import styles from "./Login.module.scss"
import Input from '../../Components/Input/Input.component';
import { Outlet, useNavigate } from 'react-router';
import Button from '../../Components/Button/Button.component';
const defaultValues = {
    email: '',
    password: ''
}

const Login = () => {
    const [formValues, setFormValues] = useState(defaultValues)
    const { email, password } = formValues;
    const navigate = useNavigate()
    const [error, setError] = useState(false)
    const [passwordError, setpasswordError] = useState(false)
    const [clickable, setClickable] = useState(true);

    //To capture the inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }

    const Register = () =>{
        navigate("/Register")
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


    return (
        <div className={styles.outer}>

            {/* left div, where image is going to be  */}
            <div className={styles.left}></div>
            {/* Right div aka login form */}
            <div className={styles.right}>
                <h2 className={styles.heading}>Login</h2>
                <form>
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
                        label={"Password"}
                        value={password}
                        type="password"
                        name="password"
                        required={true}
                        onChange={handleChange}
                    />
                </form>

                {
                    clickable ?
                        <>
                            <Button
                                buttonType={'black'}
                                children={"Sign In"}
                                buttonSize={styles.buttonSize}
                            />

                            <p className={styles.option}>Don't have an Account?</p>

                            <Button
                                buttonType={'secondary'}
                                children={'Sign Up'}
                                buttonSize={styles.secondary}
                                onClick = {Register}
                                 />
                                 </>

                        :
                        <>
                        </>
                }
            </div>

            <Outlet/>
        </div>
    );
};

export default Login;