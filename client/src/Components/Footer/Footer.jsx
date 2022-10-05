import styles from './Footer.module.scss';
import { useLocation } from 'react-router';
import logo from '../../Assets/Icons/testLogo.svg';

const Footer = ({path}) => {
    const pathName = useLocation();
    if(pathName.pathname === '/' || pathName.pathname === "/Register") return null;

    return (
        <div className={styles.container}> 
            <div className={styles.container__logo}>
                <img src={logo} alt="" />
            </div>
            <div className={styles.container__text}>
                <p>For more information, please contact The Open Window on <strong>012 648 9200</strong> </p>
                <p>| <strong>info@openwindow.co.za</strong></p>
                <p>© 2022 Open Window. All rights reserved.</p>
            </div>
        </div>
    )
};

export default Footer;