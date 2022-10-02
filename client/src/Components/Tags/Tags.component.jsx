import React from 'react';
import styles from "./Tags.module.scss"

const Tags = ({title, id,  ...otherProps}) => {
    return (
        <div className={styles.container} {...otherProps} id={id}>
           <p>
            {title}
        </div>
    );
};

export default Tags;