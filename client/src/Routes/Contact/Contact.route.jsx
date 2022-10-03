import React from "react";
import styles from "./Contact.module.scss";
import SideNavigation from "../../Components/sideNavigation/SideNavigation.component";
import ContactCard from "../../Components/Contact/ContactCard";
import Avatar from "@mui/material/Avatar";
import Button from "../../Components/Button/Button.component";
import FlaggedComment from "../../Components/FlaggedComment/FlaggedComment.component";
export default function Contact() {
  return (
    <>
      <div className={styles.container}>
        <SideNavigation />
        <div>
          <h2>Contact</h2>
          <h4>Staff</h4>
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
      {/* <div>
        <FlaggedComment />
      </div> */}
    </>
  );
}
