import React from "react";

/* Styling */
import styles from "./Contact.module.scss";

/* Components */
import SideNavigation from "../../Components/sideNavigation/SideNavigation.component";
import Button from "../../Components/Button/Button.component";
import ContactCard from "../../Components/Contact/ContactCard";
import AnswerBoxComponent from "../../Components/AnswerBox/AnswerBox.component";

export default function Contact() {
  return (
    <div className={styles.container}>
      <SideNavigation />
      <div>
        <h2 style={{ marginTop: "20px" }}>Contact</h2>
        <h4 style={{ marginTop: "20px" }}>Staff</h4>
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
  );
}
