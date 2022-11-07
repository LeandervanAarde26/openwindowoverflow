/* React */
import { useLocation } from 'react-router';

/* Styling */
import styles from './Home.module.scss';

/* Components */
import SideNavigation from '../../Components/sideNavigation/SideNavigation.component';
import QuestionsContainer from '../../Components/QuestionsContainer/QuestionsContainer.component';
import RightContainer from '../../Components/RightContainer/RightContainer.component';
import ArticlesContainer from '../../Components/ArticlesContainer/ArticlesContainer.component';

const Home = () => {
    const pathName = useLocation();

    return (
        <div className={styles.container}>
            <SideNavigation />
            <div className={styles.middle}>
                {
                    pathName.pathname === '/home'
                    ?
                        <QuestionsContainer />
                    :
                        pathName.pathname === '/articles'
                    ?
                        <ArticlesContainer />
                    :
                        null
                }
            </div>
            <RightContainer/>
        </div>
    );
};

export default Home;