<<<<<<< Updated upstream
import React, { useContext, useState, useEffect } from "react";
import styles from "./FollowTags.module.scss";
import SideNavigation from "../../Components/sideNavigation/SideNavigation.component";
import RightContainer from "../../Components/RightContainer/RightContainer.component";
import FollowableTags from "../../Components/FollowableTags/FollowableTags.component";
import Tags from "../../Components/Tags/Tags.component";
import Button from "../../Components/Button/Button.component";
import { RegisterContext } from "../../Contexts/Register.context";
import { useNavigate } from "react-router";
import axios from "axios";
import RegComplete from "../../Components/RegCompleteModal/RegComplete.component";

const FollowTags = () => {
  const navigate = useNavigate();
  const [tag, setTags] = useState();
  const { removeFromTags, tags, currentUser, setCurrentUser } =
    useContext(RegisterContext);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setTags(
      tags.map((i) => (
        <Tags
          title={i}
          id={"remove"}
          onClick={(e) => removeFromTags(e.target.innerHTML)}
        />
      ))
=======
import React, { useContext, useState, useEffect } from 'react';
import styles from "./FollowTags.module.scss"
import SideNavigation from '../../Components/sideNavigation/SideNavigation.component';
import RightContainer from '../../Components/RightContainer/RightContainer.component';
import FollowableTags from '../../Components/FollowableTags/FollowableTags.component';
import Tags from '../../Components/Tags/Tags.component';
import Button from '../../Components/Button/Button.component';
import { RegisterContext } from '../../Contexts/Register.context';
import { useNavigate } from 'react-router';
import axios from "axios"
import RegComplete from '../../Components/RegCompleteModal/RegComplete.component';
const FollowTags = () => {
    const navigate = useNavigate()
    const [tag, setTags] = useState()
    const { removeFromTags, tags, currentUser, setCurrentUser } = useContext(RegisterContext);
    const [openModal, setOpenModal] = useState(false);
    const [viewTags, setViewTags] = useState()

    useEffect(() => {
        setTags(tags.map((i) => <Tags title={i} id={'remove'} onClick={(e) => removeFromTags(e.target.innerHTML)} />))
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
        <>
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
        </>
>>>>>>> Stashed changes
    );
  }, [tags]);

  useEffect(() => {
    setTags(
      tags.map((i) => (
        <Tags
          title={i}
          id={"remove"}
          onClick={(e) => removeFromTags(e.target.innerHTML)}
        />
      ))
    );
    console.log(currentUser);
  }, [tags]);

  // console.log(currentUser.currentUser)

  const handleClick = (e) => {
    //Do the axios call and navigate in the .then function
    let payload = { ...currentUser.currentUser, followedTags: tags };
    console.log(payload);

    axios
      .post("http://localhost:5001/api/registeruser", payload)
      .then((res) => {
        console.log(payload);
        console.log(res);
        setOpenModal((prev) => !prev);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(openModal);

  console.log(tags);
  const tagData = [
    {
      tag: "Html",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum blandit in odio elementum. Enim amet lorem tellus ultricies egestas etiam in. Dictumst accumsan nec sed ut felis diam gravida nam sed. ",
      questions: 34,
      questionToday: 23,
    },
    {
      tag: "React",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum blandit in odio elementum. Enim amet lorem tellus ultricies egestas etiam in. Dictumst accumsan nec sed ut felis diam gravida nam sed. ",
      questions: 34,
      questionToday: 23,
    },
    {
      tag: "Scss",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum blandit in odio elementum. Enim amet lorem tellus ultricies egestas etiam in. Dictumst accumsan nec sed ut felis diam gravida nam sed. ",
      questions: 34,
      questionToday: 23,
    },
    {
      tag: "Mongodb",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum blandit in odio elementum. Enim amet lorem tellus ultricies egestas etiam in. Dictumst accumsan nec sed ut felis diam gravida nam sed. ",
      questions: 34,
      questionToday: 23,
    },
    {
      tag: "1st Year",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum blandit in odio elementum. Enim amet lorem tellus ultricies egestas etiam in. Dictumst accumsan nec sed ut felis diam gravida nam sed. ",
      questions: 34,
      questionToday: 23,
    },
    {
      tag: "Python",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum blandit in odio elementum. Enim amet lorem tellus ultricies egestas etiam in. Dictumst accumsan nec sed ut felis diam gravida nam sed. ",
      questions: 34,
      questionToday: 23,
    },
    {
      tag: "Html2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum blandit in odio elementum. Enim amet lorem tellus ultricies egestas etiam in. Dictumst accumsan nec sed ut felis diam gravida nam sed. ",
      questions: 34,
      questionToday: 23,
    },
    {
      tag: "React2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum blandit in odio elementum. Enim amet lorem tellus ultricies egestas etiam in. Dictumst accumsan nec sed ut felis diam gravida nam sed. ",
      questions: 34,
      questionToday: 23,
    },
    {
      tag: "Scss2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum blandit in odio elementum. Enim amet lorem tellus ultricies egestas etiam in. Dictumst accumsan nec sed ut felis diam gravida nam sed. ",
      questions: 34,
      questionToday: 23,
    },
    {
      tag: "Mongodb2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum blandit in odio elementum. Enim amet lorem tellus ultricies egestas etiam in. Dictumst accumsan nec sed ut felis diam gravida nam sed. ",
      questions: 34,
      questionToday: 23,
    },
    {
      tag: "1st Year2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum blandit in odio elementum. Enim amet lorem tellus ultricies egestas etiam in. Dictumst accumsan nec sed ut felis diam gravida nam sed. ",
      questions: 34,
      questionToday: 23,
    },
    {
      tag: "Python2",
      description:
        " ipsum dolor sit amet, consectetur adipiscing elit. Elementum blandit in odio elementum. Enim amet lorem tellus ultricies egestas etiam in. Dictumst accumsan nec sed ut felis diam gravida nam sed. ",
      questions: 34,
      questionToday: 23,
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <SideNavigation />
        <div className={styles.outer}>
          <h2>Choose your Tags to follow</h2>
          <div className={styles.inner}>
            {tagData.map((i, index) => (
              <FollowableTags
                key={index}
                tag={<Tags title={i.tag} />}
                number={i.questions}
                today={i.questionToday}
                desc={i.description}
              />
            ))}
          </div>
          <h2>Your tags</h2>
          <div className={styles.bottom}>
            <div className={styles.tagContainer}>{tag}</div>

            <div className={styles.buttonContainer}>
              <Button
                buttonType={"primary"}
                children={"Finish registration"}
                buttonSize={styles.height}
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
        <RightContainer />

        {openModal && (
          <RegComplete
            name={currentUser.currentUser.username}
            email={currentUser.currentUser.email}
          />
        )}
      </div>
    </>
  );
};

export default FollowTags;
