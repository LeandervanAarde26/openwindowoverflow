import styles from './ProfileCard.module.scss';
import test from '../../Assets/car.jpg';

const ProfileCard = (props) => {
    return (
        <div className={styles.container}>
            <img 
                src={props.profileImage} 
                alt="" 
            />
        </div>
    );
};

export default ProfileCard;