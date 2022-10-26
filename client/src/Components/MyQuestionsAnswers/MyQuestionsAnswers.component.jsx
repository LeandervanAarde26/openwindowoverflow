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

const MyQuestionsAnswers = (props) => {
    const tags = ["Html", "css", "scss", "React"]
    
    return (
        <div className={styles.container}>
            <h5>{props.title}</h5>
            <div className={styles.tagsContainer}>
                {tags.map((tag, index) => (<Tags key={index} title={tag}/>))}
            </div>
            {/* Insert margin top here */}
            <div className={styles.informationContainer}>
                <div className={styles.information}>
                    <Icon
                        icon={ic_votes}
                    />
                    <h5>{props.votes}</h5>
                    <h6>Votes</h6>
                </div>
                {
                    props.answers != 0 
                    ?
                        <div className={styles.information}>
                            <Icon
                                icon={ic_answers}
                            />
                            <h5>{props.answers}</h5>
                            <h6>
                                {
                                    props.answers > 1 ?
                                    "Answers"
                                    : "Answer"
                                }
                            </h6>
                        </div>
                    : 
                        ''    
                }
                {
                    props.resolved &&

                    <div className={styles.information}>
                        <Icon
                            icon={ic_correct}

                        />
                        <h6>Resolved</h6>
                    </div>
                }
            </div>
        </div>
    );
};

export default MyQuestionsAnswers;