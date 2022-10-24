/* React */
import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

/* Styling */
import styles from "./FollowTags.module.scss";

/* Context */
import { RegisterContext } from "../../Contexts/Register.context";
import { ValidUserContext } from "../../Contexts/Register.context";

/* Components */
import SideNavigation from "../../Components/sideNavigation/SideNavigation.component";
import RightContainer from "../../Components/RightContainer/RightContainer.component";
import FollowableTags from "../../Components/FollowableTags/FollowableTags.component";
import Tags from "../../Components/Tags/Tags.component";
import Button from "../../Components/Button/Button.component";
import RegComplete from "../../Components/RegCompleteModal/RegComplete.component";


const FollowTags = () => {
    const navigate = useNavigate();
    const {validUser, setValidUser} = useContext(ValidUserContext);
    const [tag, setTags] = useState();
    const { removeFromTags, tags, currentUser, setCurrentUser } = useContext(RegisterContext);
    const [openModal, setOpenModal] = useState(false);
    const [viewTags, setViewTags] = useState();

    useEffect(() => {
        setTags(tags.map((i, index) => <Tags key={index} title={i} id={'remove'} onClick={(e) => removeFromTags(e.target.innerHTML)} />))
        
        if(validUser)
            return
        
        axios.get('http://localhost:5001/api/getalltags')
        .then(res =>{
            setViewTags(res.data.map((i, index) => (<FollowableTags key={i._id} tag={<Tags title={i.name} />} desc={i.Description} />)))
        })
        .catch(err =>{
            console.log(err)
        })
    }, [tags]);

    const handleClick = (e) => {
        //Do the axios call and navigate in the .then function
        let payload = { ...currentUser.currentUser, followedTags: tags }
        console.log(payload)

        axios.post('http://localhost:5001/api/registeruser', payload)
        .then(res =>{
            console.log(payload)
            console.log(res)
            setOpenModal(prev => !prev )
        })
        .catch(err =>{
            console.log(err)
        })
    }

    return (
        <div className={styles.container}>
            <SideNavigation />
            <div className={styles.outer}>
                <h2>Choose your Tags to follow</h2>
                <div className={styles.inner}>
                    {viewTags}
                </div>
                <h2>Your tags</h2>
                <div className={styles.bottom}>
                    <div className={styles.tagContainer}>
                        {tag}
                    </div>
                    <div className={styles.buttonContainer}>
                        <Button
                            buttonType={"primary"}
                            children={"Finish registration"}
                            buttonSize={styles.height}
                            onClick={handleClick} />
                    </div>
                </div>
            </div>
            <RightContainer />
            {openModal && <RegComplete name={currentUser.currentUser.username} email={currentUser.currentUser.email}/>}
        </div>
    );
}
export default FollowTags;