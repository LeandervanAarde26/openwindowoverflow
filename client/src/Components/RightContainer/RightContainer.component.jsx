/* React */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
/* Styling */
import styles from "./RightContainer.module.scss"

/* Components */
import Button from '../Button/Button.component';
import AdSenseContainer from '../AdSenseContainer/AdSenseContainer.component';
import FollowedTags from '../FollowedTagsComponent/FollowedTags.component';
import TopRatedQuestion from '../TopRatedQuestion/TopRatedQuestion.component';

/* Icons/Images */
import Discord from "../../Assets/Discord.png";
/* Axios */
import axios from 'axios'


const RightContainer = ({ simliliar, topRated, questionid }) => {
    const location = useLocation();
    const [topR, setTopR] = useState();
    const [similiar, setSimiliar] = useState();
    const [busy, setBusy] = useState(true)


    useEffect(() => {

        axios.get('http://localhost:5001/api/gettoprated')
            .then(res => {
                let data = res.data
                console.log(data)
                setTopR(data)
                setBusy(false)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        busy
            ?
            null
            :
            <div className={styles.container}>
                {/* Insert followed Tags Component Here */}
                {
                    location.pathname === "/Choosetags"
                        ?
                        null
                        :
                        <FollowedTags />
                }
                {/* End followed Tags Component Here */}
                <a href="https://discord.gg/cdbTTdJb" target={"_blank"}>
                    <Button
                        buttonType={'discord'}
                    />
                </a>


                {
                    location.pathname == `/Question/${questionid}`
                        ?
                        <div className={styles.topRatedQuestions}>
                            <h4>Similiar Questions</h4>
                            {simliliar.map(i => (
                                <TopRatedQuestion
                                    nav={i._id}
                                    key={i._id}
                                    heading={i.title}
                                    votes={i.rating}
                                    answers={i.answers.length}
                                    username={i.author.username}
                                    date={new Date(i.postedDate).toString().slice(0, 16)}
                                />
                            ))}

                        </div>
                        :
                        location.pathname === "/home"
                            ?
                            <div className={styles.topRatedQuestions}>
                                <h4>Top Rated Questions</h4>
                                {
                                    topR.map(i => (
                                        <TopRatedQuestion
                                            nav={i._id}
                                            key={i._id}
                                            heading={i.title}
                                            votes={i.rating}
                                            answers={i.answers.length}
                                            username={i.author.username}
                                            date={new Date(i.postedDate).toString().slice(0, 16)}
                                        />)
                                    )
                                }
                            </div>
                            :
                            null
                }
                {/* <AdSenseContainer /> */}
            </div>
    );
};

export default RightContainer;