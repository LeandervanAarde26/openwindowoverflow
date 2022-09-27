import React from 'react';
import styles from './ArticlesFilter.module.scss';
import Icon from '../Icon/Icon';
import ic_flag from '../../Assets/Icons/ic_flag.svg';
import Tags from '../Tags/Tags.component';
import Button from '../Button/Button.component';


const ArticlesFilter = () => {
    const tags = ["Html, css, scss, React"]
    const visuals = tags.map((tag, index) => <Tags key={index} title={tag} />)

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Icon
                    icon={ic_flag}
                />
                <h3>84 Likes</h3>
                <div className={styles.follow}>
                <Button
                    buttonType={"black"}
                    children={"Follow"} />     
            </div>

            </div>
            
            <div>
            
            <h5>This is the title of the Article</h5>
            <div className={styles.recommend}>
            <Icon
                    icon={ic_flag}
                />
                Recommended
            </div>
                <div className={styles.tagsContainer}>
                    {visuals}
                </div>
            <p className={styles.comment}>Please be clearer with this this this and this because this is difficult to understand and I don't quite understand what you're trying to achieve with this this this and also with this.</p>
            <h1>Article posted by user</h1>
            
            </div>

        </div>
    );
};

export default ArticlesFilter;