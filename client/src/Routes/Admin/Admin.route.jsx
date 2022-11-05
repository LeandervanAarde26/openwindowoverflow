import React from "react";
import styles from "./Admin.module.scss";
import SideNavigation from "../../Components/sideNavigation/SideNavigation.component";

const AdminRoute = () => {
  return (
    <div className={styles.container}>
      <SideNavigation />
      <div className={styles.middle}>


      </div>
    </div>
  );
};

export default AdminRoute;
