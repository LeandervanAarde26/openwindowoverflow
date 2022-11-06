/* React */
import React, { useState, useEffect } from 'react';

/* Styling */
import styles from "./ArticlesContainer.module.scss";

/* Components */
import Article from '../Article/Article.component';
import axios from 'axios'
import Button from '../Button/Button.component';

const ArticlesContainer = () => {
    const [data, setData] = useState()
    const [busy, setBusy] = useState(true)

    useEffect(() => {
        axios.get('http://localhost:5001/api/getarticles')
            .then(res => {
                console.log(res)
                setData(res.data)
                setBusy(false)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    return (
        <div className={styles.outer}>
            <div className={styles.top}>
                <h3>Articles</h3>
                <Button
                    buttonType={'primary'}
                    children={'Add Article'}
                    // onClick={ask}

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
                        auth={i.author}
                        link={i.link}
                        desc={i.description}
                    />))
                }
            </div>
        </div>
    );
};

export default ArticlesContainer;