import React from "react";
import styles from "./Contact.module.scss";
import SideNavigation from "../../Components/sideNavigation/SideNavigation.component";
// import Avatar from "@mui/material/Avatar";
import Button from "../../Components/Button/Button.component";
import ContactCard from "../../Components/Contact/ContactCard";
// import AnswerBoxComponent from "../../Components/AnswerBox/AnswerBox.component";
import RightContainer from "../../Components/RightContainer/RightContainer.component";
import ArticlesContainer from "../../Components/ArticlesContainer/ArticlesContainer.component";
import { useState } from "react";
import { useLocation } from "react-router";
import QuestionsContainer from "../../Components/QuestionsContainer/QuestionsContainer.component";

export default function Contact() {
  const [currentLocation, setCurrentLocation] = useState()
  const pathName = useLocation();
  return (
    <>
      <div className={styles.container}>
        <SideNavigation />
        <div>
          <h2>Contact</h2>
          <h4>Staff</h4>
          {/* <AnswerBoxComponent /> */}
          <div className={styles.contacts}>
            <ContactCard contactName={"Mike Maynard (Subject head)"} contactEmail={"mike@openwindow.co.za"} />
            <ContactCard contactName={"Armand Pretorius"} contactEmail={"armand@openwindow.co.za"} />
            <ContactCard contactName={"Tsungai Katsuro"} contactEmail={"tsungai@openwindow.co.za"} />
            <ContactCard contactName={"Leo Kuyper 2nd year/Creative Computing"} contactEmail={"leo@openwindow.co.za"} />
            <ContactCard contactName={"Carlo Kuyper 1st year/Creative Computing"} contactEmail={"carlo@openwindow.co.za"} />

          </div>
          <h4>Creators</h4>
          <div className={styles.contacts}>
            <ContactCard contactName={"Anchen Ayres"} contactEmail={"20313208@virtualwindow.co.za"} />
            <ContactCard contactName={"Cameron Godwin"} contactEmail={"200109@virtualwindow.co.za"} />
            <ContactCard contactName={"Leander van Aarde"} contactEmail={"200211@virtualwindow.co.za"} />
            <ContactCard contactName={"Liam Wedge"} contactEmail={"2214443@virtualwindow.co.za"} />
            <ContactCard contactName={"Vian Du Plessis"} contactEmail={"22132432@virtualwindow.co.za"} />
          </div>
        </div>
        <RightContainer />
      </div>
      {/* <RightContainer /> */}
      {/* <div><FlaggedComment /></div> */}
    </>
  );
}
