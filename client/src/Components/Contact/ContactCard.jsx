import React from "react";
import Avatar from "@mui/material/Avatar";
import styles from "./ContactCard.module.scss";
import Button from "../Button/Button.component";

const ContactCard = () => {
  return (
    <div 
        style={{ float: "right" }}
        className={styles.container}
    >
        <Avatar
        id="avatar"
        sx={{ width: 100, height: 100, marginTop: 5, marginLeft: "120px" }}
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
        <Button buttonType={"black"}>
            <h3>Email</h3>
        </Button>
        </div>
    </div>
  );
};

export default ContactCard;
