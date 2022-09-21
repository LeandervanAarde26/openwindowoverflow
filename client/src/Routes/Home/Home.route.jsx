import styles from './Home.module.scss';
import AllButtons from '../../Components/ButtonExamples/AllButtons.component';
import SideNavigation from '../../Components/sideNavigation/SideNavigation.component';
import QuestionsContainer from '../../Components/QuestionsContainer/QuestionsContainer.component';
import RightContainer from '../../Components/RightContainer/RightContainer.component';



const Home = () => {
    return (
        <div className={styles.container}>
            <SideNavigation/>
            <QuestionsContainer/>
            {/* <AllButtons/> */}
            <RightContainer/>
        </div>
    );
};

export default Home;