/* React */
import React from 'react';

/* Styling */
import styles from "./ArticlesContainer.module.scss";

/* Components */
import Preview from '../Preview/Preview.component';
const ArticlesContainer = () => {
    return (
        <div className={styles.outer}>
            <h3>Articles</h3>
            <div className={styles.container}>
                <Preview 
                    goodQuestion={true}
                    resolved={true}
                />
                <Preview />
                <Preview />
                <Preview />
                <Preview />
                <Preview />
            </div>
        </div>
    );
};

export default ArticlesContainer;