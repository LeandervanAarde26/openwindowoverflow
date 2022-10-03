import React from "react";
import styles from "./Contact.module.scss";
import SideNavigation from "../../Components/sideNavigation/SideNavigation.component";
import ContactCard from "../../Components/Contact/ContactCard";

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

          <div>
            <h4 style={{ marginTop: 350 }}>Creators</h4>
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
          </div>
        </div>
      </div>
    </>
  );
}
