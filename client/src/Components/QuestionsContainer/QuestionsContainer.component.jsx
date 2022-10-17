/* React */
import React, {useEffect, useState} from 'react';
import axios from 'axios';

/* Styling */
import styles from "./QuestionsContainer.module.scss";

/* Components */
import Preview from '../Preview/Preview.component';
import IntroductionHome from '../IntroductionHome/IntroductionHome.component';

const QuestionsContainer = () => {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5001/api/questions')
        .then(res => {
            let data = res.data;
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            let yyyy = today.getFullYear();
            today = mm + '/' + dd + '/' + yyyy;

            data = data.map((x) => {
                return {...x, timePassed:
                    Math.round((new Date(today).getTime() - new Date("1-11-2022").getTime() ) / (1000 * 3600 * 24)) 
                }
            });

            setQuestions(data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <div className={styles.outer}>
   
            <h3>Questions</h3>
            <div className={styles.container}>
                {
                    questions.map((i, index) => 
                        <Preview
                            key={i._id}
                            votes={i.rating}
                            tags={i.tags}
                            answers={i.answers.length}
                            resolved={i.resolved}
                            goodQuestion={
                                i.rating >= 15
                                ? true
                                : false
                            }
                            user={i.author.username}
                            question={i.question}
                            timePassed={i.timePassed}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default QuestionsContainer;