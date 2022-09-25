import React from 'react';
import styles from './PostedFollowedArticles.module.scss';
import Icon from '../Icon/Icon';
import ic_votes from '../../Assets/Icons/ic_clipboard.svg';
import ic_answers from '../../Assets/Icons/ic_checkmark.svg';
import ic_correct from '../../Assets/Icons/ic_correct.svg';


const PostedFollowedArticles = () => {

    return (
        <div className={styles.container}>
            <h5>This is the title of an Article</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, natoque venenatis parturient phasellus sit. Quisque pharetra viverra nulla lectus integer mattis id pretium fusce. Lectus risus sollicitudin amet, lacus, tincidunt gravida mi cursus elementum.</p>
            <div className={styles.informationContainer}>
                <div className={styles.information}>
                    <Icon
                        icon={ic_votes}
                    />
                    <break></break>
                    <h3>84 Likes</h3>
                </div>
            </div>
        </div>
    );
};

export default PostedFollowedArticles;

// const MyQuestionsAnswers = () => {
//     const tags = ["Html, css, scss, React"]
//     const visuals = tags.map((tag, index) => <Tags key={index} title={tag} />)

//     return (
//         <div className={styles.container}>
//             <h5>This is the title of the Question</h5>
//             <div className={styles.tagsContainer}>
//                 {visuals}
//             </div>
//             {/* Insert margin top here */}
//             <div className={styles.informationContainer}>
//                 <div className={styles.information}>
//                     <Icon
//                         icon={ic_votes}
//                     />
//                     <break></break>
//                     <h5>90</h5>
//                     <break></break>
//                     <h3>Votes</h3>
//                 </div>
//                 <div className={styles.information}>
//                     <Icon
//                         icon={ic_answers}
//                     />
//                     <break></break>
//                     <h5>90</h5>
//                     <break></break>
//                     <h3>Answers</h3>
//                 </div>
//                 <div className={styles.information}>
//                     <Icon
//                         icon={ic_correct}

//                     />
//                     <break></break>
//                     <h5>90</h5>
//                     <break></break>
//                     <h3>Resolved</h3>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MyQuestionsAnswers;