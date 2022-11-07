/* React */
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/prism";
// Don’t forget to include the styles as well

/* Styling */
import styles from "./AnswerBox.module.scss";

/* Components */
import Icon from "../Icon/Icon";
import Button from "../Button/Button.component";

/* Icons/Images */
import ic_correct from "../../Assets/Icons/ic_correct.svg";
import ic_arrow from "../../Assets/Icons/ic_arrow.svg";
import ic_correct_answer from "../../Assets/Icons/ic_correct_answer.svg";
import CodePreview from "../CodePreview/CodePreview.component";
import { useEffect } from "react";
import axios from "axios";

const AnswerBoxComponent = (props) => {
    const [code, setCode] = useState(`const [code, setCode] = useState('');
const onChange = (e) => {
    setCode(e.target.value);
    //This is just a sample to show what it will look like
}`);

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.voting}>
                    <Icon 
                        onClick={props.upVote}
                        icon={ic_arrow} 
                        className={props.didUpVote && styles.upVote}
                    />
                    <h5>
                        {props.votes}
                    </h5>
                    <Icon 
                        onClick={props.downVote}
                        icon={ic_arrow} 
                        className={props.didDownVote && styles.downVote}
                    />
                    </div>
                    <div className={styles.answer}>
                        {props.answer}
                    </div>
            </div>

            <div className={styles.answerContainer}>
                { props.correct &&
                    <Icon
                        icon={ic_correct_answer}
                    />
                }

                <div className={styles.code}>
                    <CodePreview
                        children={props.code}
                    />
                </div>
            </div>


            {
                props.answerImage === "" || !props.answerImage
                ?
                    null
                :
                    <div className={styles.imageCon}>
                        <img src={props.answerImage}/>
                    </div>
            }

            {
                !props.answered && props.owner ?         
                <div className={styles.bottom}>
                    <h6>Did this answer your question? </h6>

                    <Button 
                        children={"Mark as resolved"} 
                        buttonType={"primary"}
                        onClick={props.markResolved}
                    />
                </div>
                : props.owner && props.answered ?
                <div className={styles.bottom}>
                    <h6>Did this answer your question? </h6>

                    <Button 
                        children={"Mark as un-resolved"} 
                        buttonType={"primary"}
                        onClick={props.markUnResolved}
                    />
                </div>
                : ''
            }
        </div>
    );
};

export default AnswerBoxComponent;