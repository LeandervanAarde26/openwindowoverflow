import styles from "./Preview.module.scss";

/* Components */
import Tags from '../Tags/Tags.component';
import Icon from '../Icon/Icon';

/* Icons/Images */
import ic_votes from '../../Assets/Icons/ic_clipboard.svg';
import ic_answers from '../../Assets/Icons/ic_checkmark.svg';
import ic_correct from '../../Assets/Icons/ic_correct.svg';
import ic_star from '../../Assets/Icons/ic_star.svg';
import test from '../../Assets/car.jpg';

const Preview = (props) => {
    const answeringUser = "Armand Pretorius"
 
    const testClick = () => {
        console.log('hey')
    }

    const testClick2 = () => {
        console.log('sfhey')
    }

    return (
        <div className={styles.container}
            onClick={testClick2}
        >
            <div className={styles.left}>
                <div>
                    <Icon
                        icon={ic_votes}
                    />

                    <h5>{props.votes} votes</h5>
                </div>
                <div>
                    <Icon
                        icon={ic_answers}
                    />

                    <h5>{props.answers} answers</h5>
                </div>
                {
                    props.resolved
                    &&
                    <div>
                        <Icon
                            icon={ic_correct}
                        />

                        <h5>Resolved</h5>
                    </div>
                }
            </div>

            <div className={styles.right}>
                <div className={styles.heading}>
                    <h4>This is the Question Title</h4>

                    {
                        props.goodQuestion
                        &&
                        <div className={styles.heading__sub}>
                            <Icon
                                icon={ic_star}
                            />

                            <p>Good question</p>
                        </div>
                    }
                </div>
                
                <div className={styles.tagsContainer}>
                    {
                        props.tags.map((i, index) => 
                            <Tags 
                                key={index} 
                                title={i}
                                onClick={testClick}
                            />
                        )
                    }
                </div>

                <div className={styles.profileContainer}>
                    <img 
                        src={test}
                        alt="" 
                    />
                    <p className={styles.name}>
                        <strong>{props.user}</strong>&nbsp;asked question {
                        props.askTime > 365 && props.askTime < (365 * 2)
                        ? Math.round(props.askTime/365) + ' Year ago'
                        : props.askTime == 0 || props.askTime == -0 && props.askTime != ''
                        ? 'Today'
                        : props.askTime == 1
                        ? props.askTime + ' Day ago'
                        : props.askTime > (365 * 2)
                        ? Math.round(props.askTime/365) + ' Years ago'
                        : props.askTime + ' Days ago'
                    }
                    </p>
                </div>
        
                <p className={styles.description}>
                    {props.question}
                </p>
                <p className={styles.answeringUser}> 
                    {
                        props.resolved &&
                        <>
                            <strong>{props.user}</strong>&nbsp;answered question  {
                                props.timePassed > 365 && props.timePassed < (365 * 2)
                                ? Math.round(props.timePassed/365) + ' Year ago'
                                : props.timePassed == 0 || props.timePassed == -0
                                ? 'Today'
                                : props.timePassed == 1
                                ? props.timePassed + ' Day ago'
                                : props.timePassed > (365 * 2)
                                ? Math.round(props.timePassed/365) + ' Years ago'
                                : props.timePassed + ' Days ago'
                            }
                        </>
                }
                </p>
            </div>

        </div>
    );
};

export default Preview;