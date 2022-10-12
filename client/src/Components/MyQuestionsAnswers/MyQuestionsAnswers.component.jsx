/* React */
import React from 'react';

/* Styling */
import styles from './MyQuestionsAnswers.module.scss';

/* Components */
import Tags from '../Tags/Tags.component';
import Icon from '../Icon/Icon';

/* Icons/Images */
import ic_votes from '../../Assets/Icons/ic_clipboard.svg';
import ic_answers from '../../Assets/Icons/ic_checkmark.svg';
import ic_correct from '../../Assets/Icons/ic_correct.svg';

const MyQuestionsAnswers = () => {
    const tags = ["Html", "css", "scss", "React"]
    
    return (
        <div className={styles.container}>
            <h5>This is the title of the Question</h5>
            <div className={styles.tagsContainer}>
                {tags.map((tag, index) => (<Tags key={index} title={tag}/>))}
            </div>
            {/* Insert margin top here */}
            <div className={styles.informationContainer}>
                <div className={styles.information}>
                    <Icon
                        icon={ic_votes}
                    />
                    <break></break>
                    <h5>90</h5>
                    <break></break>
                    <h3>Votes</h3>
                </div>
                <div className={styles.information}>
                    <Icon
                        icon={ic_answers}
                    />
                    <break></break>
                    <h5>90</h5>
                    <break></break>
                    <h3>Answers</h3>
                </div>
                <div className={styles.information}>
                    <Icon
                        icon={ic_correct}

                    />
                    <break></break>
                    <h5>90</h5>
                    <break></break>
                    <h3>Resolved</h3>
                </div>
            </div>
        </div>
    );
};

export default MyQuestionsAnswers;