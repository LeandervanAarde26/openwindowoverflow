import React from "react";
import styles from "./ContactCard.module.scss";
import Button from "../Button/Button.component";
import image from "../../Assets/car.jpg";


function ContactCard(props) {
  return (
    <>
      <div className={styles.main}>
        <img className={styles.image} src={image}/>
        <br/>
        <p className={styles.name}>{props.contactName}</p>
        <p className={styles.address}>{props.contactEmail}</p>

        <div>
          <Button buttonType={"black"} children={"Email"} />
        </div>
      </div>
    </>
  );
}

export default ContactCard;
