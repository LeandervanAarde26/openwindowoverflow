/* React */
import React from "react";

/* Styling */
import styles from "./ContactCard.module.scss";

/* Components */
import Button from "../Button/Button.component";

/* Icons/Images */
import image from "../../Assets/car.jpg";

function ContactCard() {
  return (
    <>
      <div
        style={{ float: "left", marginTop: "20px" }}
        className={styles.container}
      >
        <img
          src={image}
          style={{
            borderRadius: "50%",
            height: 80,
            width: 85,
            marginLeft: 130,
          }}
        />
        <p style={{ marginLeft: "80px", marginBottom: "20px" }}>
          Mike Maynard (Subject head)
        </p>
        <p style={{ marginLeft: 105, fontWeight: 500 }}>
          mike@openwindow.co.za
        </p>

        <div>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank"><Button buttonType={"black"} children={"Email"} /></a>
        </div>
      </div>
    </>
  );
}

export default ContactCard;
