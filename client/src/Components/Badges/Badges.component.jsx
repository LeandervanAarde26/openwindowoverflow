import React from "react";
import styles from './Badges.module.scss'
import {useState} from 'react';




const Badges = ({badgeImage, title, badgeDescription, ...otherProps}) => {

  const [isHovering, setIsHovering] = useState(false);

  const mouseHover = () => {
    setIsHovering(true);
  };

  const mouseOut = () => {
    setIsHovering(false);
  };

    return (<>
        <div className={styles.main} onMouseOver={mouseHover} onMouseOut={mouseOut} {...otherProps}>
            <div className={styles.badgeIcon}>
                <div className={styles.image} style={{ backgroundImage: `url(${badgeImage})`}}>
    
                </div>
                <div className={styles.badgeTitle}>
                    <h4>{title}</h4>
                    {isHovering && <h6>{badgeDescription}</h6>}
                </div>
            </div>
        </div>
    </>)
}

export default Badges;