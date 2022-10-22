import React from 'react';
import styles from "./SearchItem.module.scss"
const SearchItem = ({title, description}) => {
    return (
        <div className={styles.container}>
            <div className={styles.container__right}>
                    <h6>{title}</h6>
                    <p>{description}</p>
            </div>
            <div className={styles.container__left}>
                <span>
                &#8594;	
                </span>
            </div>
        </div>
    );
};

export default SearchItem;