<<<<<<< HEAD
/* React */
import React, { useState, useEffect, useContext } from "react";
import { Outlet, useNavigate } from "react-router";

/* Styling */
import styles from "./Register.module.scss";

/* Context */
import { RegisterContext } from "../../Contexts/Register.context";

/* Components */
import Input from "../../Components/Input/Input.component";
import Button from "../../Components/Button/Button.component";
import ProfileCard from "../../Components/Profile/ProfileCard";

/* Icons/Images */
import Image from "../../Assets/RegisterImage.png";
import logo from "../../Assets/Icons/testLogo.svg";
import imageOne from "../../Assets/DefaultProfileImages/Default1.png";
import imageTwo from "../../Assets/DefaultProfileImages/Default2.png";
import imageThree from "../../Assets/DefaultProfileImages/Default3.png";
import imageFour from "../../Assets/DefaultProfileImages/Default4.png";
import imageFive from "../../Assets/DefaultProfileImages/Default5.png";
import Default from "../../Assets/DefaultProfileImages/DefaultImage.jpeg";
=======
import React, { useState } from 'react';
import styles from "./Register.module.scss"
import Input from '../../Components/Input/Input.component';
import { Outlet, useNavigate } from 'react-router';
import Button from '../../Components/Button/Button.component';
import Image from '../../Assets/RegisterImage.png';
import Login from '../Login/Login.route';
>>>>>>> anchen3

const defaultValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    year: "",
};

const Register = () => {
    //RANDOM USERNAME GENERATOR
    const [formValues, setFormValues] = useState(defaultValues);
    const { username, email, password, confirmPassword, year } = formValues;
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const [passErrr, setpasswordError] = useState(false);
    const [clickable, setClickable] = useState(true);
    const [profileImage, setProfileImage] = useState(Default);
    const { setCurrentUser } = useContext(RegisterContext);

    const defaultImageArray = [
        imageOne,
        imageTwo,
        imageThree,
        imageFour,
        imageFive
    ];

    useEffect(() => {
        document.title = "Sign up";
    }, []);

    const changeImage = (e) => {
        setProfileImage(e.target.src);
        setFormValues({ ...formValues, image: e.target.src });
    };

    const mappedImages = defaultImageArray.map((image) => (
        <ProfileCard key={image} profileImage={image} function={changeImage} />
    ));

  const handleChange = (e) => {
        const { name, value } = e.target;
        const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let correctEmail =
        value.includes("@openwindow.co.za") ||
        value.includes("@virtualwindow.co.za");
        const emailCheck = emailRegex.test(value);

        setFormValues({ ...formValues, [name]: value });

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
  };

    const SignIn = () => {
        navigate("/");
    };

    const test = (e) => {
        // navigate(("/Choosetags"))

        if (formValues.password != formValues.confirmPassword) {
            setpasswordError(true);
            console.log("hey");
        } else {
            setpasswordError(false);
            let payload = {
                username: formValues["username"].trim(),
                email: formValues["email"].trim(),
                password: formValues["password"].trim(),
                userImage: formValues["image"],
                currentStudyYear: +formValues["year"].trim(),
            };

            setCurrentUser(payload);
            navigate("/Choosetags");
        }
    };

    return (
        <div className={styles.outer}>
            <div className={styles.left}>
                <h2 className={styles.heading}>Sign Up</h2>
                <div className={styles.previewContainer}>
                    <img src={profileImage} />
                </div>
                <div className={styles.profileCon}>{mappedImages}</div>
                <form>
                    <Input
                        label={"Username"}
                        value={username}
                        type="text"
                        name="username"
                        required={true}
                        onChange={handleChange}
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
                        label={
                        passErrr
                            ? "Passwords do not match, try again"
                            : "Confirm password"
                        }
                        value={confirmPassword}
                        type="password"
                        name="confirmPassword"
                        required={true}
                        onChange={handleChange}
                    />
                </form>

                {
                    clickable 
                    ? 
                        <>
                            <Button
                                buttonType={"black"}
                                children={"Sign up"}
                                buttonSize={styles.buttonSize}
                                onClick={test}
                            />
<<<<<<< HEAD

                            <p className={styles.option}>Already a user on __ ?</p>

                            <Button
                                buttonType={"secondary"}
                                children={"Sign in"}
=======
                            <p className={styles.option}>Already a user on OpenOverlow? <span onClick={Login} className={styles.option2}> Sign In</span></p>

                            {/* <Button
                                buttonType={'secondary'}
                                children={'Sign in'}
>>>>>>> anchen3
                                buttonSize={styles.secondary}
                                onClick={SignIn}
                            /> */}
                        </>
                    : 
                        null
                }
            </div>
            <div className={styles.right}></div>
        </div>
    );
};

export default Register;
