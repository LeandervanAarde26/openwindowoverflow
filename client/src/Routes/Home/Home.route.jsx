/* React */
import { useLocation } from 'react-router';
import { useState } from 'react';

/* Styling */
import styles from './Home.module.scss';

/* Components */
import AllButtons from '../../Components/ButtonExamples/AllButtons.component';
import SideNavigation from '../../Components/sideNavigation/SideNavigation.component';
import QuestionsContainer from '../../Components/QuestionsContainer/QuestionsContainer.component';
import RightContainer from '../../Components/RightContainer/RightContainer.component';
import ArticlesContainer from '../../Components/ArticlesContainer/ArticlesContainer.component';

const Home = () => {
    const [currentLocation, setCurrentLocation] = useState()
    const pathName = useLocation();

    return (
        <div className={styles.container}>
            <SideNavigation />
            
            {
                pathName.pathname === '/Home'
                ?
                    <QuestionsContainer />
                :
                    pathName.pathname === '/Articles'
                ?
                    <ArticlesContainer />
                :
                    null
            }

            <RightContainer/>
        </div>
    );
};

export default Home;