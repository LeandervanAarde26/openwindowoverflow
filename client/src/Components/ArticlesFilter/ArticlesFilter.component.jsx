import React from 'react';
import styles from './ArticlesFilter.module.scss';
import Icon from '../Icon/Icon';


const ArticlesFilter = () => {

    return (
        <div className={styles.container}>
            <h5>This is the title of the Question</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, natoque venenatis parturient phasellus sit. Quisque pharetra viverra nulla lectus integer mattis id pretium fusce. Lectus risus sollicitudin amet, lacus, tincidunt gravida mi cursus elementum.</p>
            <div className={styles.informationContainer}>
                <div className={styles.information}>
                    {/* <Icon
                        icon={ic_votes}
                    /> */}
                    <break></break>
                    <h3>84 Likes</h3>
                </div>
            </div>
        </div>
    );
};

export default ArticlesFilter;