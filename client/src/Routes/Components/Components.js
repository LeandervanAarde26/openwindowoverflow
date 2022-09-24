import React from 'react';
import Button from '../../Components/Button/Button.component';
import styles from './Components.module.scss'
import Icon from '../../Components/Icon/Icon';
import ic_votes from '../../Assets/Icons/ic_clipboard.svg';
import ic_answers from '../../Assets/Icons/ic_checkmark.svg';
import ic_correct from '../../Assets/Icons/ic_correct.svg';
import Tags from '../../Components/Tags/Tags.component';
import CommentsContainer from '../../Components/CommentsContainer/CommentsContainer.component';





const Components = () => {
    const testerTags = ['html', 'css', 'scss', 'React']
    const visuals = testerTags.map((tag, index) => <Tags key={index} title={tag} />)
    const reply = "Please be clearer with this this this and this because this is difficult to understand and I don't quite understand what you're trying to achieve with this this this and also with this. So how are you going to do this"
    const right = "Article Posted by User"
    const user = "Leander van Aarde"
    const date = "29 June 2021 @ 21:00"

    return (

        <CommentsContainer/>
        // <div className={styles.container}>

        //     <div className={styles.heading}>
        //         <h4>This is the Title of the Article</h4>
        //     </div>

        //     <div className={styles.tagsContainer}>
        //         {visuals}
        //     </div>

        //     <p className={styles.description}>{reply}</p>


        //     <div className={styles.leftIcon}>
        //         <Icon
        //             icon={ic_votes}
        //         />
        //         <p>84 Likes</p>
        //     </div>

        //     <Button
        //         className={styles.button}
        //         buttonType={"black"}
        //         children="Follow"
        //     />
        //     <p className={styles.description}>{right}</p>


        //     <div className={styles.heading}>
        //         <h4>This is the Title of the Question</h4>
        //     </div>

        //     <div className={styles.tagsContainer}>
        //         {visuals}
        //     </div>

        //     <div className={styles.voteIcon}>
        //         <Icon
        //             icon={ic_votes}
        //         />
        //         <p>0 Votes</p>
        //     </div>

        //     <div className={styles.resolvedIcon}>
        //         <Icon
        //             icon={ic_correct}
        //         />
        //         <p>0 Resolved</p>
        //     </div>

        //     <div className={styles.answerIcon}>
        //         <Icon
        //             icon={ic_answers}
        //         />
        //         <p>0 Answers</p>
        //     </div>

        //     <div className={styles.heading}>
        //         <h4>Comments</h4>
        //     </div>

        //     <p className={styles.description}>{user}</p>
        //     <p className={styles.description}>{date}</p>
        //     <p className={styles.description}>{reply}</p>

        //     <Button
        //         className={styles.outlinebutton}
        //         buttonType={"outline"}
        //         children="View more Comments"
        //     />
        // </div>
    );
};

export default Components;