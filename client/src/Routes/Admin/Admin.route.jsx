import React, { useEffect, useState, useContext } from "react";
import styles from "./Admin.module.scss";
import SideNavigation from "../../Components/sideNavigation/SideNavigation.component";
import RightContainer from "../../Components/RightContainer/RightContainer.component";
import FlaggedComment from "../../Components/FlaggedComment/FlaggedComment.component";
import Preview from "../../Components/Preview/Preview.component";
import axios from "axios";
import { RerenderContext } from "../../Contexts/Rerenders.context";
import AddAdmin from "../../Components/AddAdmin/AddAdmin.component";
import AddTag from "../../Components/AddTag/AddTag.component";
import { useNavigate } from "react-router";

const AdminRoute = () => {
    const navigate = useNavigate();
    const [flagged, setFlagged] = useState();
    const [busy, setBusy] = useState(true);
    const { update, setUpdate } = useContext(RerenderContext);

    useEffect(() => {
        axios.get("http://localhost:5001/api/getflagged")
        .then((res) => {
            console.log(res.data);
            setFlagged(res.data);
            setBusy(false);
            console.log(res.data[0].comments[0].flags)
        })
        .catch((err) => {
            console.log(err);
        });

    }, [update]);

    const deleteComment = (commentId, questionId) => {
        console.log(commentId)
        console.log(questionId)
        axios.patch(`http://localhost:5001/api/deleteComment/${commentId}/${questionId}`)
        .then(res =>{
            console.log(res)
            setUpdate(prev => !prev)
        })
        .catch(err =>{
            console.log(err)
        }) 
    }

    const goToQuestion = (e) => { 
        navigate(`/Question/${e}`) 
    }

  return busy ? null : (
    <div className={styles.container}>
      <SideNavigation />
      <div className={styles.middle}>
        <h3>Flagged Comments</h3>
        <div className={styles.flaggedContainer}>
            {flagged.map((i) => 
                i.comments.map((x) => 
                x.flagged ? 
                <FlaggedComment
                    key={x._id}
                    commentTitle={x.comment}
                    questionId={i._id}
                    commentId={x._id}
                    askedUser={i.author.username}
                    commentUser={x.user.username}
                    commId={x._id}
                    flags={x.flags.length}
                    onClick={(commentId, questionId) => deleteComment(x._id, i._id)}
                    goToQuestion={(e) => goToQuestion(i._id)}
                />
                : ''
                ))  
            }
        </div>

        <h3 className={styles.breakHeading}>Oldest unanswered Questions</h3>
        <div className={styles.flaggedContainer}>
          {/* Place preview components */}
        </div>
        <div className={styles.innerCon}>
          <div className={styles.addAdmin}>
            <AddAdmin />
          </div>

            <div className={styles.addTag}>
              <AddTag />
            </div>
          </div>

        <div className={styles.tagOverview}>
          {/* Place preview components */}
        </div>
      </div>
      <RightContainer />
    </div>
  );
};

export default AdminRoute;



