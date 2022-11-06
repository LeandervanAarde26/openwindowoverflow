import React, {useEffect, useState} from "react";
import styles from "./Admin.module.scss";
import SideNavigation from "../../Components/sideNavigation/SideNavigation.component";
import RightContainer from "../../Components/RightContainer/RightContainer.component";
import FlaggedComment from '../../Components/FlaggedComment/FlaggedComment.component'
import Preview from "../../Components/Preview/Preview.component";
import axios from 'axios'


const AdminRoute = () => {
  const [flagged, setFlagged] = useState()

  useEffect(() =>{

    axios.get('http://localhost:5001/api/getflagged')
    .then(res =>{
      console.log(res.data)
    })
    .catch(err =>{
      console.log(err)
    })

  }, [])

  return (
    <div className={styles.container}>
    <SideNavigation />
    <div className={styles.middle}>
        <h3>Flagged Comments</h3>
          <div className={styles.flaggedContainer}>
            {/* @Cameron please set the state in the useEffect and map the components below to show what is needed 
              - Question id needs to be present so we can navigate to the Question
              - Who the asked user us 
              - Who the commented user is 
              - Comment needs to be the title. 
          
            */}
             <FlaggedComment/>
             <FlaggedComment/>
             <FlaggedComment/>
             <FlaggedComment/>
             <FlaggedComment/>
             <FlaggedComment/>
          </div>

          <h3 className={styles.breakHeading}>Oldest unanswered Questions</h3>
          <div className={styles.flaggedContainer}>
          {/* Place preview components */}

          </div>
    </div>
    <RightContainer/>
</div>
  );
};

export default AdminRoute;
