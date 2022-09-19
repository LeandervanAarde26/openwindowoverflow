import {NavLink} from 'react-router-dom';

import styles from './NavBar.module.scss';

import logo from '../../Assets/Icons/testLogo.svg';
import SearchBar from '../Input/SearchBar';
import Icon from '../Icon/Icon';
import Button from '../Button/Button.component'
import ProfileCard from '../Profile/ProfileCard';
import Dropdown from '../Dropdown/Dropdown';

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

                <div className={styles['container__login--dropdown']}>
                    <NavLink to='/s'>
                        <Icon
                            className={styles['container__login--trophy']}
                            icon={'ic_trophy'}
                        />
                    </NavLink>
                    <div className={styles.dropContent}>
                        <Dropdown
                            title={'Notifications'}
                        />
                    </div>
                </div>

                <Icon
                    className={styles['container__login--trophy']}
                    icon={'ic_inbox'}
                />
            </div>
            <div className={styles.container__profile}>
                <ProfileCard
                    profileImage={logo}
                />
            </div>
        </div>
    );
};

export default NavBar;