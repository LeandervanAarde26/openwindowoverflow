import React, { useContext } from 'react';
import styles from "./ValidateUser.module.scss";
import theImage from "../../Assets/LoginImage.png"
// import { RegisterContext } from '../../Contexts/Register.context';
import Button from '../../Components/Button/Button.component';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import axios from 'axios'
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { useParams } from 'react-router';

const ValidateUser = () => {
    // const { currentUser } = useContext(RegisterContext)
    const [searchParams] = useSearchParams();
    const user = useParams()
    // const curr = currentUser.currentUser
    const navigate = useNavigate();
    const [content, setContent] = useState()
    const [login, setLogin] = useState()
    console.log(searchParams.get('id'))
    // console.log(curr)

    // http://localhost:5001/api/validateUser

    useEffect(() =>{
        axios.patch(`http://localhost:5001/api/validateUser/${searchParams.get('id')}`)
        .then(res =>{
            console.log(res)
        })
        .catch(err =>{
            console.log(err)
        })
    },[])
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <img className='img' src={theImage} alt={"ValidationImage"} />
            </div>
            <div className={styles.right}>
                <h3>Welcome,!
                    <br />
             Your account has succesfully verified! Let's login and get started! 
                </h3>

                <div className={styles.buttonContainer}>
                    {/* Link didnt work because it is looking for a local path to redirect ti, a href takes anylink */}
     
                        <Button
                            buttonType={"primary"}
                            children={"Go to Login"}
                            onClick={() => {navigate("/")}}
                        />
 
                </div>
            </div>
        </div>
    );
};

export default ValidateUser;