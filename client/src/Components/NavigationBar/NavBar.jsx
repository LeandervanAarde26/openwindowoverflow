import styles from './NavBar.module.scss';

import logo from '../../Assets/Icons/logo.svg';

const NavBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container__logo}>
                <img
                    src={logo} 
                    alt="" 
                />
            </div>
            <div className={styles.container__search}>
                <h1>Hey</h1>
            </div>
            <div className={styles.container__login}>
                <h1>There</h1>
            </div>
            <div className={styles.container__profile}>
                <h1>Stranger</h1>
            </div>
        </div>
    );
};

export default NavBar;