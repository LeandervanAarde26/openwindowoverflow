import React from "react";
import styles from "./Admin.module.scss";
import SideNavigation from "../../Components/sideNavigation/SideNavigation.component";
import FlaggedComment from "../../Components/FlaggedComment/FlaggedComment.component";

const AdminRoute = () => {
  return (
    <>
      <div className={styles.container}>
        <SideNavigation />
        <div>
          <h2 style={{ margin: 30 }}>Flagged comments</h2>
          <FlaggedComment />
        </div>
      </div>
    </>
  );
};

export default AdminRoute;
