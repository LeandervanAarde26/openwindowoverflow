/* React */
import React, {useEffect, useState, useContext} from "react";
import axios from 'axios'

/* Styling */
import styles from './FollowedTags.module.scss'

/* Context */
import { ValidUserContext } from "../../Contexts/Register.context";

/* Components */
import Tags from "../Tags/Tags.component";


const FollowedTags = () => {
    const [tags, setTags] = useState()
    const [busy, setBusy] = useState(true)
    const {validUser, setValidUser} = useContext(ValidUserContext);
    
    useEffect(() => {
       let user = sessionStorage.getItem("currentUser");

        if (user != null && validUser) {
            axios.get(`http://localhost:5001/api/individualuser/${user}`)
            .then(res =>{
                // console.log(res);
                let data = res.data
        
                // console.log(data)
                setTags(res.data.followedTags.map((tag, index) => (<Tags key={index} title={tag}/>)))
                setBusy(false)
                
            })
            .catch(err =>{
                console.log(err)
            })
        }
    }, []) 

    // console.log(tags)

    return(
        busy
        ? 
        null 
        : 
        <div className={styles.main}>
            <div className={styles.title}>
                Followed tags
            </div>
            <div className={styles.tags}>
                {tags}
            </div>
        </div>
    );
};

export default FollowedTags;