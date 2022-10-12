/* React */
import React from 'react';

/* Styling */
import styles from './PostedFollowedArticles.module.scss';

/* Components */
import Icon from '../Icon/Icon';

/* Icons/Images */
import ic_votes from '../../Assets/Icons/ic_clipboard.svg';
import ic_answers from '../../Assets/Icons/ic_checkmark.svg';
import ic_correct from '../../Assets/Icons/ic_correct.svg';

const PostedFollowedArticles = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h4>This is the title of an Article</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, natoque venenatis parturient phasellus sit. Quisque pharetra viverra nulla lectus integer mattis id pretium fusce. Lectus risus sollicitudin amet, lacus, tincidunt gravida mi cursus elementum.</p>
            </div>
            
            <div className={styles.right}>
                <div>
                    <Icon
                        icon={ic_votes}
                    />  
                </div>
                <p>84 Likes</p>
            </div>
        </div>
    );
};

export default PostedFollowedArticles;