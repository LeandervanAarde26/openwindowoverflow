import React from 'react';
import styles from "./Article.module.scss"
import ic_like from "../../Assets/Icons/ic_like.svg"
import Icon from '../Icon/Icon';
import Button from '../Button/Button.component';
const Article = ({ heading, auth, link, desc, likes }) => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h4>{heading}</h4>
                <p className={styles.auth}>Posted by {auth}</p>
                <p className={styles.link}>{link}</p>
                <p className={styles.desc}>{desc}</p>
                <div className={styles.button}>

                    <a href={link} target="_blank">
                        <Button
                            buttonType={"primary"}
                            children={"Read more"}
                        />
                    </a>
                </div>
            </div>
            <div className={styles.right}>
                <Icon
                    icon={ic_like}
                />
                <p>{likes} Likes</p>
            </div>
        </div>
    );
};

export default Article;