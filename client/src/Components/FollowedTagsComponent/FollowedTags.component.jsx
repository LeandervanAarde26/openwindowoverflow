import React, {useEffect} from "react";
import Tags from "../Tags/Tags.component";
import styles from './FollowedTags.module.scss'
import axios from 'axios'
import { useState } from "react";


const FollowedTags = () => {
    const user = sessionStorage.getItem("currentUser")
    const [tags, setTags] = useState()
    const [busy, setBusy] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:5001/api/individualuser/${user}`)
        .then(res =>{
            console.log(res);
            let data = res.data

            console.log(data)
            setTags(res.data.followedTags.map((tag, index) => (<Tags key={index} title={tag}/>)))
            setBusy(false)
            
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])

    console.log(tags)

    return(
        busy
        ? 
        null 
        : 
        <>
        <div className={styles.main}>
            <div className={styles.title}>
                Followed tags
            </div>
            <div className={styles.tags}>
                {tags}
            </div>
        </div>
        </>
    )
}

export default FollowedTags;