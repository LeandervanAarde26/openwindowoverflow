import React, { useState, useEffect } from 'react';
import styles from "./Login.module.scss"
import Input from '../../Components/Input/Input.component';
import { Outlet, useNavigate } from 'react-router';
import Button from '../../Components/Button/Button.component';

const defaultValues = {
    email: '',
    password: ''
}

const Login = () => {
    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    });
    const { email, password } = formValues;
    const navigate = useNavigate()
    const [error, setError] = useState(false)
    const [passwordError, setpasswordError] = useState(false)
    const [clickable, setClickable] = useState(true);

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
        const emailCheck = emailRegex.test(value);

        setFormValues({ ...formValues, [name]: value });

        if (value.length > 2) {
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

    const signInUser = (e) =>{
        let payload ={
            email: formValues['email'].trim(),
            password: formValues['password'].trim(),
        }

        console.log(payload)

        // axios.post('http://localhost:5001/api/', payload)
        // .then((res) =>{
        //     if(!res.data){
        //         //Do something here aswell
        //     } else{
        //         // do something here
        //     }

        // })
        // .catch((err) =>{
        //     console.log(err)
        // })

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
                            <p className={styles.reset}>Forgot password? <br /> <span>Click here to reset</span></p>
                            <Button
                                buttonType={'black'}
                                children={"Sign In"}
                                buttonSize={styles.buttonSize}
                                onClick={signInUser}
                            />

                            <p className={styles.option}>Don't have an Account?</p>

                            <Button
                                buttonType={'secondary'}
                                children={'Sign Up'}
                                buttonSize={styles.secondary}
                                onClick={Register}
                            />
                        </>
                        :
                        null
                }
            </div>

            <Outlet />
        </div>
    );
};

export default Login;