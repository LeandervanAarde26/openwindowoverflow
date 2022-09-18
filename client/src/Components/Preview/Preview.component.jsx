import React from 'react';
import Tags from '../Tags/Tags.component';
import styles from "./Preview.module.scss"

const Preview = ({ votes, answers, resolved, children, }) => {
    const testerTags = ['html', 'scss', 'css', 'React']
    const visuals = testerTags.map(tag => <Tags title={tag} />)
    const user = "Leander van Aarde"
    const answeringUser = "Armand Pretorius"
    const question = "This is my question description because I have no idea what Im doing and can someone please help me with all of this because I am so lost, please just tell me what I need to do and where I need to go this coding stuff is very difficult and I struggle, I am currently a first year with no experience in this and I am fresh out of hight school, so please dont do this. This entire question was structured so badly and im sorry"

    return (
        <div className={styles.container}>
            <div className={styles.innerLeft}>
                Hello
            </div>
            <h4>This is the Question Title</h4>
            <div className={styles.tagsContainer}>
                {visuals}
            </div>
            <div className={styles.profileContainer}>
                <div className={styles.profile}></div>
                <p className={styles.name}><strong>{user}</strong>&nbsp;asked this 5 hours ago</p>
            </div>
            <p className={styles.description}>{question}</p>
            <p className={styles.answeringUser}> <strong>{answeringUser}</strong>&nbsp;answered question 5 hours ago</p>
        </div>
    );
};

export default Preview;