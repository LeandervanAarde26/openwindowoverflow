import React from "react";
import styles from "./PostArticle.module.scss";
import Button from "../Button/Button.component";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function PostArticle({ articles }) {
  return (
    <>
      <div className={styles.container}>
        <div styles={styles.articleContent}>
          <h3>Post and view Articles</h3>
          <h5>Article title</h5>
          <textarea
            id={styles.articleTitle}
            placeholder="Javascript best practices...."
          />
          <h5>Article link</h5>
          <textarea
            id={styles.articleLink}
            placeholder="eg.... https://www.freecodecamp.org/news/best-practices-for-react/"
          />
          <h5>Article Description</h5>
          <textarea
            id={styles.articleDescription}
            placeholder="The best tips i've found when using the .map() function in REACT"
          />
          <Button buttonType={"primary"}>Post Article</Button>
        </div>
      </div>
      <div className={styles.postedArticles}>
        <h4>Browse through our featured articles below</h4>
        {articles?.map((article) => (
          <div>
            <h4 style={{ opacity: "0.6" }}>{article.title}</h4>
            <h6>{article.description}</h6>
            <a href={article.link}>{article.link}</a>
          </div>
        ))}
      </div>
    </>
  );
}
