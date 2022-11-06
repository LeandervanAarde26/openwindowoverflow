import React from "react";

/* Styling */
import styles from "./Contact.module.scss";

/* Components */
import SideNavigation from "../../Components/sideNavigation/SideNavigation.component";
import Button from "../../Components/Button/Button.component";
import ContactCard from "../../Components/Contact/ContactCard";
import AnswerBoxComponent from "../../Components/AnswerBox/AnswerBox.component";
// import AnswerBoxComponent from "../../Components/AnswerBox/AnswerBox.component";
import RightContainer from "../../Components/RightContainer/RightContainer.component";
import ArticlesContainer from "../../Components/ArticlesContainer/ArticlesContainer.component";
import { useState } from "react";
import { useLocation } from "react-router";
import QuestionsContainer from "../../Components/QuestionsContainer/QuestionsContainer.component";
// admin images
import mike from "../../Assets/AdminImages/mikeProfile.png";
import armand from "../../Assets/AdminImages/armandProfile.png";
import tsungai from "../../Assets/AdminImages/tsungaiProfile.png";
import leo from "../../Assets/AdminImages/leoProfile.png";
import carlo from "../../Assets/AdminImages/carloProfile.png";

// creator images
import leander from "../../Assets/AdminImages/leander.jpg";
import cameron from "../../Assets/AdminImages/cameron.jpg";
import anchen from "../../Assets/AdminImages/anchen.jpg";
import vian from "../../Assets/AdminImages/vian.jpg";
import liam from "../../Assets/AdminImages/liam.png";

export default function Contact() {
  const [currentLocation, setCurrentLocation] = useState();
  const pathName = useLocation();
  return (
    <div className={styles.container}>
      <SideNavigation />
      <div className={styles.centerContent}>
        <h2>Contact</h2>
        <br />
        <h4>Staff:</h4>
        {/* <AnswerBoxComponent /> */}
        <div className={styles.contacts}>
          <ContactCard
            contactName={"Mike Maynard (Subject head)"}
            contactEmail={"mike@openwindow.co.za"}
            image={mike}
          />
          <ContactCard
            contactName={"Armand Pretorius"}
            contactEmail={"armand@openwindow.co.za"}
            image={armand}
          />
          <ContactCard
            contactName={"Tsungai Katsuro"}
            contactEmail={"tsungai@openwindow.co.za"}
            image={tsungai}
          />
          <ContactCard
            contactName={"Leo Kuyper 2nd year/Creative Computing"}
            contactEmail={"leo@openwindow.co.za"}
            image={leo}
          />
          <ContactCard
            contactName={"Carlo Kuyper 1st year/Creative Computing"}
            contactEmail={"carlo@openwindow.co.za"}
            image={carlo}
          />
        </div>
        <br />
        <h4>Creators:</h4>
        <div className={styles.contacts}>
          <ContactCard
            contactName={"Anchen Ayres"}
            contactEmail={"21100284@virtualwindow.co.za"}
            image={anchen}
          />
          <ContactCard
            contactName={"Cameron Godwin"}
            contactEmail={"200109@virtualwindow.co.za"}
            image={cameron}
          />
          <ContactCard
            contactName={"Leander van Aarde"}
            contactEmail={"200211@virtualwindow.co.za"}
            image={leander}
          />
          <ContactCard
            contactName={"Liam Wedge"}
            contactEmail={"21100218@virtualwindow.co.za"}
            image={liam}
          />
          <ContactCard
            contactName={"Vian Du Plessis"}
            contactEmail={"21100483@virtualwindow.co.za"}
            image={vian}
          />
        </div>
      </div>
      <RightContainer />
    </div>
  );
}
