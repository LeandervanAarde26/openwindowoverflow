import React from "react";
import styles from "./Contact.module.scss";
import SideNavigation from "../../Components/sideNavigation/SideNavigation.component";
// import Avatar from "@mui/material/Avatar";
import Button from "../../Components/Button/Button.component";
import ContactCard from "../../Components/Contact/ContactCard";
import AnswerBoxComponent from "../../Components/AnswerBox/AnswerBox.component";
import FollowedArticlesComponent from "../../Components/FollowedArticles/FollowedArticles.component";

export default function Contact() {
  return (
    <>
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
      <FollowedArticlesComponent />
    </>
  );
}
