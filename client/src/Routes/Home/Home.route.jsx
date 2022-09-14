import styles from './Home.module.scss';
import AllButtons from '../../Components/ButtonExamples/AllButtons.component';

const Home = () => {
    return (
        <div className={styles.container}>
            <AllButtons/>
        </div>
    );
};

export default Home;