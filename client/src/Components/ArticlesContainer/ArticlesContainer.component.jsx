/* React */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

/* Styling */
import styles from "./ArticlesContainer.module.scss";

/* Components */
import Article from '../Article/Article.component';
import axios from 'axios'
import Button from '../Button/Button.component';

const ArticlesContainer = () => {
    const [data, setData] = useState()
    const [busy, setBusy] = useState(true)
    const navigate = useNavigate()
    const [userId, setUserId] = useState('');
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        setUserId(sessionStorage.getItem('currentUser'))
        axios.get('http://localhost:5001/api/getarticles')
            .then(res => {
                console.log(res)
                setData(res.data)
                setBusy(false)
            })
            .catch(err => {
                console.log(err)
            })

            setRerender(false)
    }, [rerender]);

    const add = (e) =>{
        navigate('/addArticle')
    }

    const updateLikes = (e, id) => {
        let likesList = e;
        if(e.includes(userId)) {
            let newLikesList = likesList.filter((x) => x !== userId);
            let data = {
                artId: id,
                list: newLikesList
            }

            axios.patch('http://localhost:5001/api/likeArticle/down', data)
            .then(res => {
                if(res.data) {
                    setRerender(true)
                }
            })
        } else {
            let newLikesList = e;
            newLikesList.push(userId);

            let data = {
                artId: id,
                list: newLikesList
            }

            axios.patch('http://localhost:5001/api/likeArticle/up', data)
            .then(res => {
                if(res.data) {
                    setRerender(true)
                }
            })
        }
    }

    return (
        <div className={styles.outer}>
            <div className={styles.top}>
                <h3>Articles</h3>
                <Button
                    buttonType={'primary'}
                    children={'Add Article'}
                    onClick={add}

                />
            </div>
            <div className={styles.container}>
                {
                    busy
                    ?
                    null
                    :
                 
                    data.map(i => (<Article
                        key={i._id}
                        heading={i.title}
                        auth={i.author.username}
                        link={i.link}
                        desc={i.description}
                        likes={i.likes}
                        click={(e, id) => updateLikes(i.likesList, i._id)}
                        liked={i.likesList.includes(userId) ? true : false}
                    />))
                }
            </div>
        </div>
    );
};

export default ArticlesContainer;