/* React */
import React from 'react';

/* Styling */
import styles from "./ArticlesFilterContainer.module.scss"

/* Components */
import ArticlesFilter from '../ArticlesFilter/ArticlesFilter.component';

const ArticlesFilterContainer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <h4>Articles</h4>
                <ArticlesFilter/>
            </div>
        </div>
    );
};

export default ArticlesFilterContainer;