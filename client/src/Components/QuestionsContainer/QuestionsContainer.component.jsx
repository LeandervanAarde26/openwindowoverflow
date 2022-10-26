/* React */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
/* Styling */
import styles from "./QuestionsContainer.module.scss";
/* Components */
import Preview from "../Preview/Preview.component";
import IntroductionHome from "../IntroductionHome/IntroductionHome.component";
import Button from "../Button/Button.component"

const QuestionsContainer = () => {
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();
  const ask = (e) =>{
    navigate('/question/ask')
  }

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
          return {
            ...x,
            askTime: Math.round(
              (new Date(today).getTime() - new Date(x.postedDate).getTime()) / (1000 * 3600 * 24)
            ),
          };
        });

        console.log(data);

        setQuestions(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const individualQuestion = (e) => {
    let id = e.target.key;
    console.log(e.target.id);
  };

  return (
    <div className={styles.outer}>
      <div className={styles.top}>
        <h3>Questions</h3>
        <Button
          buttonType={'primary'}
          children={'ask question'}
          onClick={ask}
          
        />
      </div>
      <div className={styles.container}>
        {questions.map((i, index) => (
          <Preview
            key={i._id}
            title={i.title}
            votes={i.rating}
            tags={i.tags}
            answers={i.answers.length}
            resolved={i.resolved}
            goodQuestion={i.rating >= 15 ? true : false}
            user={i.author.username}
            question={i.question}
            date={new Date(i.postedDate).toString().slice(0, 16)}
            timePassed={i.timePassed}
            askTime={i.askTime}
            userImage= {i.author.userImage}
            
            nav={() => navigate(`/Question/${i._id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionsContainer;
