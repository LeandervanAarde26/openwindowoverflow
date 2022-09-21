import styles from './Dropdown.module.scss';
import test from '../../Assets/car.jpg';
import DropDownNotification from '../DropDownNotification/DropDownNotification.component';

const Dropdown = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.container__top}>
                <h1>{props.title}</h1>
            </div>
            <div className={styles.container__notifications}>

                <DropDownNotification/>
                <DropDownNotification/>
                <DropDownNotification/>
                <DropDownNotification/>
                <DropDownNotification/>
                <DropDownNotification/>
                <DropDownNotification/>
                <DropDownNotification/>

            </div>
        </div>
    );
};

export default Dropdown;