import styles from './Footer.module.scss';
import { useLocation } from 'react-router';

const Footer = ({path}) => {
    const pathName = useLocation();
    console.log(pathName.pathname)
    if(pathName.pathname === '/' || pathName.pathname === "/Register") return null;

    return (
        <div className={styles.container}> 
        
        </div>
    )
};

export default Footer;