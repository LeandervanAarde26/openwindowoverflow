import React from 'react';
import { useState } from 'react';
import Back from '../BackButton/Back.component';
import NavigationButton from '../SideNavigationButtons/NavigationButton.component';
import styles from "./SideNavigation.module.scss";

const SideNavigation = () => {
    const [active, setActive] = useState(null)
    const categories = [ "Home","1st year","2nd year","3rd year","Honors","Contact","Articles"]
    const navigationButton = categories.map((i) => <NavigationButton key={i} children={i} activeClass={active === i ? `${styles.active}` : `${styles.buttonContainer}`}  onClick={ () => setActive(i)}/>)

    return (
        <div className={styles.container}>
            <Back/>
           {navigationButton}
        </div>
    );
};

export default SideNavigation;