import Tags from '../Tags/Tags.component';
import styles from "./Preview.module.scss"
import Icon from '../Icon/Icon';
import ic_votes from '../../Assets/Icons/ic_clipboard.svg';
import ic_answers from '../../Assets/Icons/ic_checkmark.svg';
import ic_correct from '../../Assets/Icons/ic_correct.svg';
import ic_star from '../../Assets/Icons/ic_star.svg';
import test from '../../Assets/car.jpg'

const Preview = (props, { votes, answers, resolved, children, }) => {
    const testerTags = ['html', 'scss', 'scss','scss','css', 'React', '1', '2', '3']
    const visuals = testerTags.map((tag, index) => <Tags key={index} title={tag} />)
    const user = "Leander van Aarde"
    const answeringUser = "Armand Pretorius"
    const question = "This is my question description because I have no idea what Im doing and can someone please help me with all of this because I am so lost, please just tell me what I need to do and where I need to go this coding stuff is very difficult and I struggle, I am currently a first year with no experience in this and I am fresh out of hight school, so please dont do this. This entire question was structured so badly and im sorry"

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div>
                    <Icon
                        icon={ic_votes}
                    />

                    <h5>0 {votes}</h5>
                </div>
                <div>
                    <Icon
                        icon={ic_answers}
                    />

                    <h5>0 {answers}</h5>
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
                    {visuals}
                </div>

                <div className={styles.profileContainer}>
                    <img 
                        src={test}
                        alt="" 
                    />
                    <p className={styles.name}><strong>{user}</strong>&nbsp;asked this 5 hours ago</p>
                </div>
        
                <p className={styles.description}>{question}</p>
                <p className={styles.answeringUser}> <strong>{answeringUser}</strong>&nbsp;answered question 5 hours ago</p>
            </div>

        </div>
    );
};

export default Preview;