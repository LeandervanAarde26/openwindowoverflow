import React from "react";
import Avatar from "@mui/material/Avatar";
import styles from "./ContactCard.module.scss";
import Button from "../Button/Button.component";

function ContactCard() {
  return (
    <>
      <div style={{ float: "left" }}>
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
          <Button buttonType={"black"} children={"Email"} />
        </div>
      </div>
    </>
  );
}

export default ContactCard;
