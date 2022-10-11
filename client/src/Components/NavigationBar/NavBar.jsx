/* React */
import {NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { RegisterContext } from '../../Contexts/Register.context';

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
// import logo from '../../Assets/Logo/FinalLogo.png'

const NavBar = () => {

    // const {currentUser} = useContext(RegisterContext)
    // console.log(currentUser)
    // const {userId, username} = currentUser.currentUser

    const user = sessionStorage.getItem("currentUser")

    // console.log(userId, username)

    const navigate = useNavigate();


    const goToProfile = () => {
        // navigate("/Profile")
        navigate(`/profile/${user}`)
    }

    // const viewItem = () => {
    //     navigate(`/Shop/Product/${name}/${id}`);
    //     setUpdate(!update)
    //     window.scrollTo(0, 0)
    // }

    return (
        <div className={styles.container}>
            <div className={styles.containerOuter}>
                <div className={styles.containerOuter__logo}>
                    <img
                        // src={logo} 
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
                    <Button
                        buttonType={'black'}
                        children={"Sign out"}
                    />

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
                        // profileImage={logo}
                        function ={goToProfile}
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