/* React */
import React from "react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

/* Styling */
import styles from "./SideNavigation.module.scss";

/* Components */
import Back from "../BackButton/Back.component";
import NavigationButton from "../SideNavigationButtons/NavigationButton.component";

const SideNavigation = () => {
    const location = useLocation();
    const [active, setActive] = useState(location.pathname.substring(1));
    const categories = [
        "home",
        "contact",
        "articles",
        "admin",
    ];

    const navigationButton = categories.map((i ) =>
        i === "contact" || i === "articles" || i === "home" || i === "admin" 
        ? 
            (
                <NavLink 
                    to={`/${i}`}
                    key={i}
                >
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