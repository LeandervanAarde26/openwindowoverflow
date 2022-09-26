import React from 'react';
import styles from "./Tags.module.scss"

const Tags = ({title}) => {
    return (
        <div className={styles.container}>
            {title}
        </div>
    );
};

export default Tags;