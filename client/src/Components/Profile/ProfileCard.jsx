/* Styling */
import styles from './ProfileCard.module.scss';

/* Icons/Images */
import test from '../../Assets/car.jpg';

const ProfileCard = (props) => {

    return (
        <div className={`
                ${styles.container}
                ${props.className}
            `} 
            onClick={props.function}
        >
            <img 
                src={props.profileImage} 
                alt="" 
            />
        </div>
    );
};

export default ProfileCard;