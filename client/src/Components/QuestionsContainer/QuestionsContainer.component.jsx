/* React */
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
/* Styling */
import styles from "./QuestionsContainer.module.scss";
/* Components */
import Preview from "../Preview/Preview.component";
import Button from "../Button/Button.component"
import { ValidUserContext } from "../../Contexts/Register.context";

const QuestionsContainer = () => {
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();
  const [tags, setTags] = useState([])
  const {validUser, setValidUser} = useContext(ValidUserContext);
  const [active, setActive] = useState()
  const [prev, setPrev] = useState()

  const ask = (e) =>{
    navigate('/question/ask')
  }
  const [arr, setArr] = useState([])

//   const filter = (e) =>{
//     var arry = [];
//      let el = e.target.innerText
    
//      const exists = arr.find(i => i === el);
//      if(!exists){
//         setArr( arr => [...arr, el] );
//      }
    

  useEffect(() => {
    axios.get('http://localhost:5001/api/questions')
      .then(res => {
        let data = res.data;
/*         let today = new Date();
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
        }); */

        console.log(data);

        setQuestions(data);
        setPrev(data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    let user = sessionStorage.getItem("currentUser");

     if (user != null && validUser) {
         axios.get(`http://localhost:5001/api/individualuser/${user}`)
         .then(res =>{
             let data = res.data
             setTags(res.data.followedTags)
             
         })
         .catch(err =>{
             console.log(err)
         })
     }
 }, []);
 

 const findIt = (e) =>{
  setQuestions(prev)
  setActive(e.target.value)
 
  const FilteredItems = questions.filter(item => item.tags.includes(e.target.value))
  setQuestions(FilteredItems)
 }

 console.log(questions)

  return (
    <div className={styles.outer}>
      <div className={styles.top}>
        <h3>Questions</h3>
        <select  onChange={findIt}>
            {
              tags.map(i => <option value={i}>{i.toUpperCase()}</option>)
            }
        </select>
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
            timePassed={i.resolved ? new Date(i.answeredBy.date).toString().slice(0, 16) : ''}
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
