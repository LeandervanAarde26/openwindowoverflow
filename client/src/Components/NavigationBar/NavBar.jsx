/* React */
import {NavLink} from 'react-router-dom';

/* Styling */
import styles from './NavBar.module.scss';

/* Components */
import SearchBar from '../Input/SearchBar';
import Icon from '../Icon/Icon';
import Button from '../Button/Button.component'
import ProfileCard from '../Profile/ProfileCard';
import Dropdown from '../Dropdown/Dropdown';

/* Icons/Images */
import logo from '../../Assets/Icons/testLogo.svg';
import trophy from "../../Assets/Icons/ic_trophy.svg";
import inbox from "../../Assets/Icons/ic_inbox.svg";

const NavBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerOuter}>
                <div className={styles.containerOuter__logo}>
                    <img
                        src={logo} 
                        alt="" 
                    />
                </div>
                <div className={styles.containerOuter__search}>
                    <SearchBar
                        label={"Search"}
                        placeholder={"Search..."}
                    />
                </div>
                <div className={styles.containerOuter__login}>
   {/*                  <Button
                        buttonType={'outline'}
                        children={"Sign out"}
                    /> */}

                    <div className={styles['containerOuter__login--dropdown']}>
                        <NavLink to='/'>
                            <Icon
                                className={styles['containerOuter__login--trophy']}
                                icon={trophy}
                            />
                        </NavLink>
                        <div className={styles.dropContent}>
                            <Dropdown
                                title={'Notifications'}
                            />
                        </div>
                    </div>

                    <Icon
                        className={styles['containerOuter__login--trophy']}
                        icon={inbox}
                    />
                </div>
                <div className={styles.containerOuter__profile}>
                    <ProfileCard
                        profileImage={logo}
                    />
                </div>
            </div>
            <div className={styles.container__search}>
                <SearchBar
                    label={"Search"}
                    placeholder={"Search..."}
                />
            </div>
        </div>
    );
};

export default NavBar;