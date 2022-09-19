import styles from './Dropdown.module.scss';
import test from '../../Assets/car.jpg';

const Dropdown = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.container__top}>
                <h1>{props.title}</h1>
            </div>
            <div className={styles.container__notifications}>
                <div className={styles['container__notifications--content']}>
                    <img 
                        src={test} 
                        alt="" 
                    />

                    <div className={styles['container__notifications--content__right']}>
                        <h1>Title of Question</h1>
                        <h2>Someone added a comment</h2>
                    </div>
                </div>
                <div className={styles['container__notifications--content']}>
                    <img 
                        src={test} 
                        alt="" 
                    />

                    <div className={styles['container__notifications--content__right']}>
                        <h1>Title of Question</h1>
                        <h2>Someone added a comment</h2>
                    </div>
                </div>
                <div className={styles['container__notifications--content']}>
                    <img 
                        src={test} 
                        alt="" 
                    />

                    <div className={styles['container__notifications--content__right']}>
                        <h1>Title of Question</h1>
                        <h2>Someone added a comment</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;