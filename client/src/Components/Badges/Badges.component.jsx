import React from "react";
import styles from './Badges.module.scss'
import {useState} from 'react';




const Badges = ({badgeImage, title, badgeDescription}) => {

  const [isHovering, setIsHovering] = useState(false);

  const mouseHover = () => {
    setIsHovering(true);
  };

  const mouseOut = () => {
    setIsHovering(false);
  };

    return (<>
        <div className={styles.main} onMouseOver={mouseHover} onMouseOut={mouseOut}>
            <div className={styles.badgeIcon}>
                <div className={styles.image} style={{ backgroundImage: `url(${badgeImage})`}}>
    
                </div>
                <div className={styles.badgeTitle}>
                    {title}
                    {isHovering && <h6>{badgeDescription}</h6>}
                </div>
            </div>
        </div>
    </>)
}

export default Badges;