/* React */
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import { useContext, useState, useEffect } from "react";
import { RegisterContext } from "../../Contexts/Register.context";
/* Styling */
import styles from "./NavBar.module.scss";

/* Components */
import SearchBar from "../Input/SearchBar";
import Icon from "../Icon/Icon";
import Button from "../Button/Button.component";
import ProfileCard from "../Profile/ProfileCard";
import Dropdown from "../Dropdown/Dropdown";

/* Icons/Images */
import trophy from "../../Assets/Icons/ic_trophy.svg";
import inbox from "../../Assets/Icons/ic_inbox.svg";
import logo from "../../Assets/Logo/finalLogo.svg";
import axios from 'axios'
import SearchItem from "../SearchItem/SearchItem.component";

const NavBar = () => {
    const user = sessionStorage.getItem("currentUser");
    const [searchable, setSearchable] = useState()
    const [results, setResults] = useState(false)
    const [searchQuer, setSearchQuer] = useState()
    const [searched, setSearched] = useState()
    const navigate = useNavigate();
    const goToProfile = () => {
        // navigate("/Profile")
        navigate(`/profile/${user}`)
    }

    useEffect(() => {
        axios.get('http://localhost:5001/api/questions')
            .then(res => {
                let data = res.data
                setSearchable(data)
                console.log(data)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const goToQuestion = (e) =>{
        let id = e.target.id ;
        setResults(false)
        navigate(`/Question/${id}`)
      }
    

    const handleSearch = (newSearchQuery) => {
        if (newSearchQuery != "") {
            setResults(true)
            setSearchQuer(newSearchQuery)

            const FilteredItems = searchable.filter(item => item.title.toLowerCase().includes(newSearchQuery.toLowerCase()))
                .map((searched => (<SearchItem key={searched._id} id={searched._id} title={searched.title} description={searched.question}  nav={goToQuestion} />)))

            setSearched(FilteredItems)
        } else {
            setResults(false)
        }
    }

    const logout = () => {
        sessionStorage.removeItem("currentUser");
        navigate('/');
    }

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
                        handleSearch={handleSearch}
                    />
                </div>
                <div className={styles.containerOuter__login}>
                    <Button
                        onClick={logout}
                        buttonType={'black'}
                        children={"Sign out"}
                    />

                    <div className={styles["containerOuter__login--dropdown"]}>
                        <NavLink to="/">
                            <Icon
                                className={styles["containerOuter__login--trophy"]}
                                icon={trophy}
                            />
                        </NavLink>
                        <div className={styles.dropContent}>
                            <Dropdown title={"Notifications"} />
                        </div>
                    </div>

                    <Icon
                        className={styles["containerOuter__login--trophy"]}
                        icon={inbox}
                    />
                </div>
                <div className={styles.containerOuter__profile}>
                    <ProfileCard profileImage={logo} function={goToProfile} />
                </div>
            </div>
            <div className={styles.container__search}>
                <SearchBar label={"Search"} placeholder={"Search..."} handleSearch={handleSearch} />
            </div>

            {
                results &&
                <div className={styles.containerOuter__searchResCon}>
                    {searched}
                </div>
            }
        </div>
    );
};

export default NavBar;
