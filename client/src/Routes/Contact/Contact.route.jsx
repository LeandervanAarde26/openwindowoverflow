import React from "react";
import styles from "./Contact.module.scss";
import SideNavigation from "../../Components/sideNavigation/SideNavigation.component";
// import Avatar from "@mui/material/Avatar";
import Button from "../../Components/Button/Button.component";
import ContactCard from "../../Components/Contact/ContactCard";
import AnswerBoxComponent from "../../Components/AnswerBox/AnswerBox.component";

export default function Contact() {
  return (
    <>
      <div className={styles.container}>
        <SideNavigation />
        <div>
          <h2>Contact</h2>
          <h4>Staff</h4>
          {/* <AnswerBoxComponent /> */}
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />

          <h4>Creators</h4>

          <ContactCard />
          <ContactCard />
          <ContactCard />
        </div>
      </div>
      {/* <div><FlaggedComment /></div> */}
    </>
  );
}
