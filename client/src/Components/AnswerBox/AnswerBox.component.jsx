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
import ic_arrow from "../../Assets/Icons/ic_arrow.svg";
import CodePreview from "../CodePreview/CodePreview.component";

const AnswerBoxComponent = (props) => {
    const [code, setCode] = useState(`const [code, setCode] = useState('');
const onChange = (e) => {
    setCode(e.target.value);
    //This is just a sample to show what it will look like
}`);

    const onChange = (e) => {
    setCode(e.target.value);
        //This is just a sample to show what it will look like
    };

    const markAnswer = () => {
        // What to do when questions is marked as correct
    };

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.voting}>
                    <Icon 
                        icon={ic_arrow} 
                    />
                    <h5>
                        {props.votes}
                    </h5>
                    <Icon 
                        icon={ic_arrow} 
                    />
                    </div>
                    <div className={styles.answer}>
                        {props.answer}
                    </div>
            </div>

            <div className={styles.code}>
                <CodePreview
                    children={props.code}
                />
            </div>

            {
                !props.answered &&                
                <div className={styles.bottom}>
                    <h6>Did this answer your question? </h6>

                    <Button 
                        children={"Mark as resolved"} 
                        buttonType={"primary"} 
                    />
                </div>
            }
        </div>
    );
};

export default AnswerBoxComponent;
