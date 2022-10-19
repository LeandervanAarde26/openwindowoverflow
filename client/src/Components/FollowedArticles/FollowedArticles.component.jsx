import React from "react";
import styles from "./FollowedArticles.module.scss";
import { HiThumbUp } from "react-icons/hi";
import { IconContext } from "react-icons";

const FollowedArticlesComponent = () => {
  return (
    <>
      <div className={styles.outer}>
        <h4>This is the title of an article</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit <br />.
          Doloremque tenetur quaerat fuga ab sed assumenda, tempore similique
          fugiat laudantium qui ad, <br /> obcaecati veritatis vel quasi veniam.
          Ab ad in temporibus.
          <IconContext.Provider value={{ size: "60px" }}>
            <div
              className={styles.likes}
              style={{ float: "right", marginTop: "-47px", marginLeft: "50px" }}
            >
              <HiThumbUp />
              <p>84 likes</p>
            </div>
          </IconContext.Provider>
        </p>
      </div>
    </>
  );
};

export default FollowedArticlesComponent;
