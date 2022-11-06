import React, { useState, useEffect } from 'react';
import styles from "./AddAdmin.module.scss";
import Input from '../Input/Input.component';
import AWS from "aws-sdk"
import Default from "../../Assets/LoginImage.png"
import Button from '../Button/Button.component';
import axios from 'axios';

const defaultValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const region = "af-south-1";
const bucketName = 'openoverflow'
AWS.config.update({
    accessKeyId: "AKIAWDMDUWDEHUXLLQOB",
    secretAccessKey: "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"
});
const bucket = new AWS.S3({
    params: { Bucket: bucketName },
    region: region
})

const AddAdmin = () => {
    const [formValues, setFormValues] = useState(defaultValues);
    const { username, email, password, confirmPassword } = formValues;
    const [image, setImage] = useState(Default);
    const [databaseImage, setDataBaseImage] = useState(null)
    const [error, setError] = useState(false);
    const [clickable, setClickable] = useState(true);
    const [passErrr, setpasswordError] = useState(false);
    const [regErr, setRegErr] = useState(false)

    const getImages = async (e) => {
        setImage(URL.createObjectURL(e.target.files[0]))
        let img = e.target.files[0]
        setDataBaseImage(img)
        // console.log(img.name)
    }

    useEffect(() => {
        document.title = "Admin";
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let correctEmail =
            value.toLowerCase().includes("@openwindow.co.za") ||
            value.toLowerCase().includes("@virtualwindow.co.za");
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
    }

    const addAdmin = (e) => {
        // navigate(("/Choosetags"))
        if (formValues.password != formValues.confirmPassword) {
            setpasswordError(true);
        } else {
            const isEmpty = Object.values(formValues).every(x => x === null || x === '' || x === 0);
            setpasswordError(false);
            if (isEmpty) {
                setRegErr(true)
            } else {
                setRegErr(false)
                if (databaseImage == null) {
                    let payload = {
                        username: formValues["username"].trim(),
                        email: formValues["email"].trim(),
                        password: formValues["password"].trim(),
                    };

                    axios.post('http://localhost:5001/api/addAmin', payload)
                    .then(res =>{
                            console.log(res.data)
                    })
                    .catch(err =>{
                        console.log(err)
                  
                    })

                    //Axios  /api/addAmin

                } else {
                    const newImage = `https://openoverflow.s3.af-south-1.amazonaws.com/${databaseImage.name.replace(/\s/g, '')}`
                    const temp = databaseImage.name.replace(/\s/g, '')

                    const params = {
                        ACL: "public-read",
                        Body: databaseImage,
                        Bucket: bucketName,
                        Key: temp
                    }
                    bucket.putObject(params).send(err => console.log(err))

                    let payload = {
                        username: formValues["username"].trim(),
                        email: formValues["email"].trim(),
                        password: formValues["password"].trim(),
                        userImage: newImage,
                    };


                    axios.post('http://localhost:5001/api/addAmin', payload)
                    .then(res =>{
                            console.log(res.data)
                    })
                    .catch(err =>{
                        console.log(err)
                       
                    })
                }
            }
            console.log(isEmpty)
        }
    };


    return (
        <div className={styles.container}>

            <h3>Add an Admin</h3>
            <div className={styles.imgContainer}>
                <img src={image} />
            </div>
            <div className={styles.inputContainer}>

                <div id={styles.uploadbtnwrapper}>
                    <Button
                        buttonType={'primary'}
                        children={'Upload file'}
                    />
                    <input type="file" name="myfile" onChange={getImages} />
                </div>


                <Input
                    // id={error ? styles.err : ""}
                    label={"Admin name"}
                    value={username}
                    type="text"
                    name="username"
                    required={true}
                    onChange={handleChange}
                />

                <Input
                    id={error ? styles.err : ""}
                    label={error ? "Invalid email, please try again" : "Admin Email"}
                    value={email}
                    type="text"
                    name="email"
                    required={true}
                    onChange={handleChange}
                />

                <Input
                    label={"Admin Password"}
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
            </div>
            {
                    clickable 
                    ?
                        <>
                            <Button
                                buttonType={'black'}
                                children={"Add new Admin"}
                                buttonSize={styles.buttonSize}
                                onClick={addAdmin}
                            />
                        </>
                    :
                        null
                }
        </div>
    );
};

export default AddAdmin;