import React from "react";
import { useState, useEffect } from "react";
import PostArticle from "../../Components/PostArticle/PostArticle.component";
import RightContainer from "../../Components/RightContainer/RightContainer.component";
import SideNavigation from "../../Components/sideNavigation/SideNavigation.component";
import styles from "./PostedArticles.module.scss";
import axios from "axios";

export default function PostedArticles() {
  const [articles, setArticles] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/getarticles")
      .then((res) => setArticles(res.data))
      .catch((err) => console.log(err));
  });
  return (
    <>
      <div className={styles.container}>
        <SideNavigation />
        <div className={styles.articlesComp}>
          <PostArticle articles={articles} />
        </div>

        <RightContainer />
      </div>
    </>
  );
}
