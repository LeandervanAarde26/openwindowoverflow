import styles from './Home.module.scss';
import AllButtons from '../../Components/ButtonExamples/AllButtons.component';
import SideNavigation from '../../Components/sideNavigation/SideNavigation.component';
import Back from '../../Components/BackButton/Back.component';
import Preview from '../../Components/Preview/Preview.component';


const Home = () => {
    return (
        <div className={styles.container}>
     
            <SideNavigation/>
            <Preview/>
        </div>
    );
};

export default Home;