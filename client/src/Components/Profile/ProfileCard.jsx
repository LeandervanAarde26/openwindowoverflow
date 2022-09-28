import styles from './ProfileCard.module.scss';
import test from '../../Assets/car.jpg';
import { useNavigate } from 'react-router';

const ProfileCard = (props) => {
    const navigate = useNavigate();

    const goToProfile = () => {
        navigate("/Profile")
    }
    return (
        <div className={styles.container} onClick={goToProfile}>
            <img 
                src={props.profileImage} 
                alt="" 
            />
        </div>
    );
};

export default ProfileCard;