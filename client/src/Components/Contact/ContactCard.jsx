/* React */
import React from "react";

/* Styling */
import styles from "./ContactCard.module.scss";

/* Components */
import Button from "../Button/Button.component";

/* Icons/Images */
import image from "../../Assets/car.jpg";


function ContactCard(props) {

  let email_href = "https://mail.google.com/mail/?view=cm&fs=1&to=" + props.contactEmail + "&su=OpenOverflow+Query";


  return (
    <>
      <div className={styles.main}>
        <img className={styles.image} src={image}/>
        <br/>
        <p className={styles.name}>{props.contactName}</p>
        <p className={styles.address}>{props.contactEmail}</p>

        <div>
        <a href={email_href} target="_blank"><Button buttonType={"black"} children={"Email"} /></a>
        </div>
      </div>
    </>
  );
}

export default ContactCard;
