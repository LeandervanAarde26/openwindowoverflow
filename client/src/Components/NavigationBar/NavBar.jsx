import styles from './NavBar.module.scss';

import logo from '../../Assets/Icons/testLogo.svg';
import SearchBar from '../Input/SearchBar';
import Icon from '../Icon/Icon';
import Button from '../Button/Button.component'

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
                <SearchBar
                    label={"Search"}
                    placeholder={"Search..."}
                />
            </div>
            <div className={styles.container__login}>
                <Button
                    buttonType={'black'}
                    children={"Sign out"}
                />

                <Icon
                    className={styles['container__login--trophy']}
                    icon={'ic_trophy'}
                />

                <Icon
                    className={styles['container__login--trophy']}
                    icon={'ic_inbox'}
                />
            </div>
            <div className={styles.container__profile}>
                <h1>Stranger</h1>
            </div>
        </div>
    );
};

export default NavBar;