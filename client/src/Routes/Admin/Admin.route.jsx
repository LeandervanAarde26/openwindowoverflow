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

const AdminRoute = () => {
    const [flagged, setFlagged] = useState();
    const [busy, setBusy] = useState(true);
    const { update, setUpdate } = useContext(RerenderContext);

    useEffect(() => {
        axios.get("http://localhost:5001/api/getflagged")
        .then((res) => {
            console.log(res.data);
            // let arr = res.data.map(i => i.filter(x => x.comments.flagged))
            // let test = res.data.map(x => x.filter(x => x.comments.flagged == true))
            // console.log("🚀 ~ file: Admin.route.jsx ~ line 23 ~ .then ~ test", test)
            // let yes = res.data.flatMap(x => x.comment.flagged)
            // console.log("🚀 ~ file: Admin.route.jsx ~ line 25 ~ .then ~ yes", yes)
            // console.log("🚀 ~ file: Admin.route.jsx ~ line 22 ~ .then ~ arr", arr)
            let test = res.data.map((i) => (
                i.comments.map((x) => 
                x.flagged ? x.comment : ''
                )
            ))
            console.log("🚀 ~ file: Admin.route.jsx ~ line 32 ~ .then ~ test", test)


            setFlagged(res.data);
            setBusy(false);
            console.log(res.data[0].comments[0].flags)
        })
        .catch((err) => {
            console.log(err);
        });

    }, [update]);

  return busy ? null : (
    <div className={styles.container}>
      <SideNavigation />
      <div className={styles.middle}>
        <h3>Flagged Comments</h3>
        <div className={styles.flaggedContainer}>
            {flagged.map((i) => (
                <FlaggedComment
                    key={i._id}
                    commentTitle={i.comments.map((c) =>
                        c.flagged ? c.comment : null
                    )}
                    questionId={i._id}
                    askedUser={i.author.username}
                    commentUser={i.comments.map((b) =>
                        b.flagged ? b.user.username : null
                    )}
                    commId={i.comments.map((c) => (c.flagged ? c._id : null))}
                    flags={i.comments.flags}
                />
            ))}
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



