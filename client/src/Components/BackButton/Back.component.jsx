/* React */
import React from 'react';
import { useNavigate } from 'react-router';

/* Styling */
import styles from './Back.module.scss';

/* Components */
import Icon from '../Icon/Icon';

/* Icons/Images */
import ic_back from '../../Assets/Icons/ic_arrow.svg';

const Back = () => {
    const navigate = useNavigate()
    const goBack = () =>{
        navigate(-1)
    }

    return (
        <div 
            className={styles.container} 
            onClick={goBack}
        >
            <Icon
                className={styles.container__icon}
                icon={ic_back}
            />

            <h5>Back</h5>
        </div>
    );
};

export default Back;