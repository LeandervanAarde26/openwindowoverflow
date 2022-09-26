import React from 'react'
import styles from './Contact.module.scss'
import SideNavigation from '../../Components/sideNavigation/SideNavigation.component';
import ContactCard from '../../Components/Contact/ContactCard';

export default function Contact() {
  return (
    <>
    
    <div className={styles.container}>
        
      <SideNavigation/>
      <h2>Contact</h2>
      <h3>Staff</h3>
      <ContactCard/>
      
    </div>
    </>
    
  )
}
