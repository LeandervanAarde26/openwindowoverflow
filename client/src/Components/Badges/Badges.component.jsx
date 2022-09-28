import React from "react";
import styles from './Badges.module.scss'
import {useState} from 'react';



const Badges = ({badgeType}) => {

  const [isHovering, setIsHovering] = useState(false);

  const mouseHover = () => {
    setIsHovering(true);
  };

  const mouseOut = () => {
    setIsHovering(false);
  };


//Extract this into a JSON format , and rather Mapa a bade component. Desc, title , hover and image <- inside JSON
    if (badgeType === "level1"){
    var badge = styles.badgelevel1;
    var title = "Murmurer"
    var badgeDescription = "Post and answer at least 5 tickets."

    } else if (badgeType === "level2"){
        var badge = styles.badgelevel2;
        var title = "Mumbler"
        var badgeDescription = "Post and answer at least 10 tickets."

    } else if (badgeType === "level3"){
        var badge = styles.badgelevel3;
        var title = "Whisperer"
        var badgeDescription = "Post and answer at least 12 tickets."

    } else if (badgeType === "level4"){
        var badge = styles.badgelevel4;
        var title = "Chatterer"
        var badgeDescription = "Post and answer at least 20 tickets."

    } else if (badgeType === "level5"){
        var badge = styles.badgelevel5;
        var title = "Chatterbox"
        var badgeDescription = "Post and answer at least 25 tickets."

    } else if (badgeType === "level6"){
        var badge = styles.badgelevel6;
        var title = "Loud mouth"
        var badgeDescription = "Post and answer at least 35 tickets."

    } else if (badgeType === "level7"){
        var badge = styles.badgelevel7;
        var title = "Screamer"
        var badgeDescription = "Post and answer at least 40 tickets."

    } else if (badgeType === "level8"){
        var badge = styles.badgelevel8;
        var title = "Know-it-all"
        var badgeDescription = "Post and answer at least 50 tickets."

    } else if (badgeType === "level9"){
        var badge = styles.badgelevel9;
        var title = "Response Guru"
        var badgeDescription = "Post and answer at least 70 tickets."

    } else if (badgeType === "bug"){
        var badge = styles.badgebug;
        var title = "Bug finder"
        var badgeDescription = "Solve at least 10 'bug related' tickets."

    } else if (badgeType === "fox"){
        var badge = styles.badgefox;
        var title = "Security Defender"
        var badgeDescription = "Solve any 'security' related ticket."

    } else if (badgeType === "happypc"){
        var badge = styles.badgehappypc;
        var title = "Computer Tamer"
        var badgeDescription = "Solve any 'crash' related ticket."

    } else if (badgeType === "idea"){
        var badge = styles.badgeidea;
        var title = "Lightning Ideas"
        var badgeDescription = "Respond to a ticket in no longer than 20 minutes of it's posted time."

    } else if (badgeType === "multiscreen"){
        var badge = styles.badgemultiscreen;
        var title = "Project Manager"
        var badgeDescription = "Suggest a solution that solves a 'group project' related ticket."

    } else if (badgeType === "network"){
        var badge = styles.badgenetwork;
        var title = "Networker"
        var badgeDescription = "Solve at least 5 tickets related to any connection based problem."

    } else if (badgeType === "phoneapp"){
        var badge = styles.badgephoneapp;
        var title = "Phone App Slinger"
        var badgeDescription = "Solve any 10 iOS, Android, Kotlin, XTML, Swift or any other phone app related tickets."

    } else if (badgeType === "studybot"){
        var badge = styles.badgestudybot;
        var title = "Book-Bot"
        var badgeDescription = "Resolve at least 50 tickets."

    } else if (badgeType === "syntax"){
        var badge = styles.badgesyntax;
        var title = "Syntax Genius"
        var badgeDescription = "Solve 20 syntax issues found in tickets."

    } else if (badgeType === "wireframe"){
        var badge = styles.badgewireframe;
        var title = "Wireframer"
        var badgeDescription = "Correct 25 CSS, SCSS or any other layout/style related tickets."

    } else if (badgeType === "teamwork"){
        var badge = styles.badgeteamwork;
        var title = "Team Player"
        var badgeDescription = "Solve any 15 tickets from the same year as yourself."

    } else {
        var badge = styles.badgedefault;
        var title = "Title"
        var badgeDescription = "How to aquire this ticket."
    }

    return (<>
        <div className={styles.main} onMouseOver={mouseHover} onMouseOut={mouseOut}>
            <div className={styles.badgeIcon}>
                <div className={badge}></div>
                <div className={styles.badgeTitle}>
                    {title}
                    {isHovering && <h6>{badgeDescription}</h6>}
                </div>
            </div>
        </div>
    </>)
}

export default Badges;





// return(
//     <div className={styles.container}>
//         <img>{badge}</img>
//         <h4>{badgeTitle}</h4>
//         <h6>{badeHover}</h6>
//     </div>
// )