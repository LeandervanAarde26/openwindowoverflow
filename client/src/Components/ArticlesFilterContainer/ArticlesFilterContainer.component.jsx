import React from 'react';
import styles from "./ArticlesFilterContainer.module.scss"
import ArticlesFilter from '../ArticlesFilter/ArticlesFilter.component';

const ArticlesFilterContainer = () => {
    

    return (
  
            <div className={styles.container}>
                <div className={styles.top}>
                    <h4>Articles</h4>
                    <ArticlesFilter/>
                    <ArticlesFilter/>

                </div>
            </div>
    );
};

export default ArticlesFilterContainer;