import React from 'react';
import styles from './Emailer.module.scss';
import image from "../../Assets/RegisterImage.png"
const Emailer = () => {
    return (
        <>

        <style>
          
        </style>
            <div style="flex: 1; padding-left: 2%; padding-right: 2%;">
                <img src={image} style = "height: 100%;  width: 100%; object-fit: cover; object-position: center;" />
            </div>

            <div  style=" flex: 1; padding-left: 2%; padding-right: 2%;" >

                <h2 style=" text-align: center ; width: 100%; margin-top: 2%; margin-bottom: 2%;"> Welcome to __ user! Let's get started... </h2>
                <p>
                    Dear user,
                    We at __ are super excited to be part of your journey to becoming a Developer! But before you can ask/ answer any
                    questions, you need to verify your account first!

                    <br />

                    <p className={styles.small}>   By verifying your account you are accepting the following rules:</p>

                    <ol>
                        <li>No hate speech or bullying allowed</li>
                        <li>Admins will review flagged comments, if flags are accepted you will be suspended from the platform</li>
                        <li>Only answer questions that you are able to answer</li>
                        <li>No contact sessions will be booked on this platform</li>
                    </ol>
                </p>
            </div>

            <div className={styles.container}>
                <div className={styles.button}>
                    Lets get Started!
                </div>
            </div>
        </>

    );
};

export default Emailer;