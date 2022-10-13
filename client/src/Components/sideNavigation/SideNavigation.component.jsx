/* React */
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

/* Styling */
import styles from "./SideNavigation.module.scss";

/* Components */
import Back from "../BackButton/Back.component";
import NavigationButton from "../SideNavigationButtons/NavigationButton.component";

const SideNavigation = () => {
    const [active, setActive] = useState(null);
    const categories = [
        "Home",
        "1st year",
        "2nd year",
        "3rd year",
        "Honors",
        "Contact",
        "Articles",
        "Admin",
    ];

    const navigationButton = categories.map((i) =>
        i === "Contact" || i === "Articles" || i === "Home" || i === "Admin" 
        ? 
            (
                <NavLink to={`/${i}`}>
                    <NavigationButton
                        key={i}
                        children={i}
                        activeClass={
                            active === i ? `${styles.active}` : `${styles.buttonContainer}`
                        }
                        onClick={() => setActive(i)}
                    />
                </NavLink>
            ) 
        : 
            (
                <NavigationButton
                    key={i + 1}
                    children={i}
                    activeClass={
                    active === i ? `${styles.active}` : `${styles.buttonContainer}`
                    }
                    onClick={() => setActive(i)}
                />
            )
    );

    return (
        <div className={styles.container}>
            <Back />
            {navigationButton}
        </div>
    );
};

export default SideNavigation;