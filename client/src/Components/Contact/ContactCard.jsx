import React from "react";
import Avatar from "@mui/material/Avatar";
import styles from "./ContactCard.module.scss";
import Button from "../Button/Button.component";
import image from "../../Assets/car.jpg";

function ContactCard() {
  return (
    <>
      <div style={{ float: "left" }}>
        <img
          src={image}
          style={{
            borderRadius: "50%",
            height: 80,
            width: 85,
            marginLeft: 130,
          }}
        />
        <p>Mike Maynard (Subject head)</p>
        <p style={{ marginLeft: 85, fontWeight: 500 }}>mike@openwindow.co.za</p>

        <div
          style={{
            height: "20px",
            width: "80px",
            marginLeft: "130px",
            marginBottom: "50px",
            marginTop: "10px",
          }}
        >
          <Button buttonType={"black"} children={"Email"} />
        </div>
      </div>
    </>
  );
}

export default ContactCard;
