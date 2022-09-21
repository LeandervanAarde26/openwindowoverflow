import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Back from '../BackButton/Back.component';
import NavigationButton from '../SideNavigationButtons/NavigationButton.component';
import styles from "./SideNavigation.module.scss";

const SideNavigation = () => {
    const [active, setActive] = useState(null)
    const categories = [ "home","1st year","2nd year","3rd year","Honors","Contact","Articles"]
    const navigationButton = categories.map((item, idx) => 
        <NavigationButton 
            route={`/${item}`}
            key={idx} 
            label={item} 
            onClick={ () => setActive(item)}
        />
    )

    return (
        <div className={styles.container}>
            <Back/>
           {navigationButton}
        </div>
    );
};

export default SideNavigation;