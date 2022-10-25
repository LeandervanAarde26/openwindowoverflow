/* React */
import React, { useState, useEffect, useContext } from 'react';
import { Outlet, useNavigate } from 'react-router';
import axios from 'axios';

/* Styling */
import styles from "./Login.module.scss"

/* Context */
import { RegisterContext } from '../../Contexts/Register.context';

/* Components */
import Input from '../../Components/Input/Input.component';
import Button from '../../Components/Button/Button.component';

const defaultValues = {
    email: '',
    password: ''
}

const Login = () => {
    const [formValues, setFormValues] = useState(defaultValues);
    const { email, password } = formValues;
    const navigate = useNavigate()
    const [error, setError] = useState(false)
    const [passwordError, setpasswordError] = useState(false)
    const [clickable, setClickable] = useState(true);
    const {setCurrentUser, currentUser} = useContext(RegisterContext)

    const Register = () => {
        navigate("/Register")
    }
    
    useEffect(() => {
        document.title = "Sign In"
    }, [])

    const handleChange = (e) => {
        // This refers to e.target.name && e.target.value
        const { name, value } = e.target;
        // Checks for email ending with virtualwindow.co.za || a email ending with openwindow.co.za
        const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let correctEmail = value.includes("@openwindow.co.za") || value.includes("@virtualwindow.co.za");
        // Check if the correct email is supplied by checking it against the regex
        if(name === "email"){
            const emailCheck = emailRegex.test(value);
                
            if (value.length > 3) {
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
        setFormValues({ ...formValues, [name]: value });
    }

    const signInUser = (e) =>{
        let payload ={
            email: formValues['email'].trim(),
            password: formValues['password'].trim(),
        }

        axios.post('http://localhost:5001/api/loginuser', payload)
        .then(res =>{
            navigate("/home")
            setCurrentUser({userId: res.data._id, username: res.data.username})
            sessionStorage.setItem("currentUser", res.data._id)
            sessionStorage.setItem("userName", res.data.username)
        })
        .catch(err =>{
            console.log(err)
        })
    }

    return (
        <>
        <div className={styles.outer}>
            <div className={styles.left}></div>
                <div className={styles.inner}>
                   <div className={styles.logo}></div>
                   <div className={styles.text1}>Welcome Person!</div>
                   <div className={styles.text2}>We are excited for having you in the <b>OpenOverFlow</b> Community!</div>
                        <div className={styles.insidetext}>
                            <div className={styles.text3}>Before your account can be activates we need to verify you. Please click the button below to begin the process.
                                <Button
                                buttonType={"secondary"}
                                children={"Sign in"}
                                />

                            </div>
                        </div>
                </div>
        </div>
        </>
    );
};

export default Login;