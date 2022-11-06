import React from "react";
import styles from "./PostArticle.module.scss";
import Button from "../Button/Button.component";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdThumbsUp } from "react-icons/io";

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
          <div className={styles.articleCon}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>

            <div id={styles.likes}>
              <IoMdThumbsUp id={styles.thumb} />
              <h5>{article.likes}</h5>
              <br />
            </div>

            <h6>Author: {article.author}</h6>
            <a href={article.link}>Continue reading!</a>
          </div>
        ))}
      </div>
    </>
  );
}
