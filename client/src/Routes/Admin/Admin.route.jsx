import React from "react";
import styles from "./Admin.module.scss";
import SideNavigation from "../../Components/sideNavigation/SideNavigation.component";
import RightContainer from "../../Components/RightContainer/RightContainer.component";
import FlaggedComment from '../../Components/FlaggedComment/FlaggedComment.component'
import Preview from "../../Components/Preview/Preview.component";

const AdminRoute = () => {
  return (
    <div className={styles.container}>
    <SideNavigation />
    <div className={styles.middle}>
        <h3>Flagged Comments</h3>
          <div className={styles.flaggedContainer}>
             <FlaggedComment/>
             <FlaggedComment/>
             <FlaggedComment/>
             <FlaggedComment/>
             <FlaggedComment/>
             <FlaggedComment/>
          </div>

          <h3 className={styles.breakHeading}>Oldest unanswered Questions</h3>
          <div className={styles.flaggedContainer}>
          {/* Place preview components */}

          </div>
    </div>
    <RightContainer/>
</div>
  );
};

export default AdminRoute;
