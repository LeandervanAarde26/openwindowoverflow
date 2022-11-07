import React, { useState } from 'react';
import styles from "./Newpassword.module.scss"
import newPass from "../../Assets/newPass.png";
import { useNavigate } from 'react-router';
import axios from 'axios';
import Input from '../../Components/Input/Input.component';
import Button from '../../Components/Button/Button.component';
import { useSearchParams } from "react-router-dom";

const defaultValues = {
    password: '',
    confirmPassword: ''
}

const Newpassword = () => {
    const [searchParams] = useSearchParams();
    const [values, setValues] = useState(defaultValues)
    const { password, confirmPassword } = values
    const [error, setError] = useState(false);
    const [clickable, setClickable] = useState(true);
    const navigate = useNavigate()
    const id = searchParams.get("id")

    const handleChange = (e) => {
        const { name, value } = e.target

        setValues({ ...values, [name]: value })
    }

   const handleClick = () =>{

    if (values.password !== values.confirmPassword){
        setError(true)
    } else{
        let payload = {password: values.password}
        console.log(id);
        axios.patch(`http://localhost:5001/api/passreset/${id}`, payload)
        .then(res => {
            console.log(payload)
            console.log(res.data)
            // navigate("/")
            // setOpenModal(prev => !prev)
        })
        .catch(err => {
            console.log(err)
        })
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
                    label={error ? " Passwords do not match" : "New password"}
                    value={password}
                    type="password"
                    name="password"
                    required={true}
                    onChange={handleChange}
                />

                <Input
                    label={"Confirm Password"}
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
                                onClick={handleClick}
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