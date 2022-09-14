import styles from './Home.module.scss';
import AllButtons from '../../Components/ButtonExamples/AllButtons.component';
import SideNavigation from '../../Components/sideNavigation/SideNavigation.component';
import Back from '../../Components/BackButton/Back.component';


const Home = () => {
    return (
        <div className={styles.container}>
            {/* <AllButtons/> */}
            <SideNavigation/>

        </div>
    );
};

export default Home;