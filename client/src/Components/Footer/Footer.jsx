import styles from "./Footer.module.scss";
import { useLocation } from "react-router";

const Footer = ({ path }) => {
  const pathName = useLocation();
  if (pathName.pathname === "/" || pathName.pathname === "/Register")
    return null;

  return (
    <div className={styles.container}>
      <h1>hey</h1>
    </div>
  );
};

export default Footer;
