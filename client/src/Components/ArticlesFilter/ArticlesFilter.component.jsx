/* React */
import React from 'react';

/* Styling */
import styles from './ArticlesFilter.module.scss';

/* Components */
import Icon from '../Icon/Icon';

/* Icons/Images */
import votes from '../../Assets/Icons/ic_like.svg'


const ArticlesFilter = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container__text}>
                <h5>This is the title of the Question</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, natoque venenatis parturient phasellus sit. Quisque pharetra viverra nulla lectus integer mattis id pretium fusce. Lectus risus sollicitudin amet, lacus, tincidunt gravida mi cursus elementum.</p>
            </div>
            <div className={styles.information}>
                <Icon
                    icon={votes}
                /> 
                <h3>84 Likes</h3>
            </div>
        </div>
    );
};

export default ArticlesFilter;