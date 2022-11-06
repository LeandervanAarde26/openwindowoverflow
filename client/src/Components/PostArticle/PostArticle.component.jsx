import React, { useRef } from "react";
import styles from "./PostArticle.module.scss";
import Button from "../Button/Button.component";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdThumbsUp } from "react-icons/io";
import spinner from "../../Assets/loadingGif.gif";

export default function PostArticle({ articles }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [author, setAuthor] = useState("");

  const addArticle = (e) => {
    e.preventDefault();

    const articlePayload = {
      title,
      description,
      link,
      author,
    };

    axios
      .post("http://localhost:5001/api/addarticles", articlePayload)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className={styles.container}>
        <div styles={styles.articleContent}>
          <h3>Post and view Articles</h3>
          <h5>Article title</h5>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            id={styles.articleTitle}
            placeholder="Javascript best practices...."
          />
          <h5>Article link</h5>
          <input
            type="text"
            onChange={(e) => setLink(e.target.value)}
            id={styles.articleLink}
            placeholder="eg.... https://www.freecodecamp.org/news/best-practices-for-react/"
          />
          <h5>Article Description</h5>
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            id={styles.articleDescription}
            placeholder="The best tips i've found when using the .map() function in REACT"
          />
          <h5>Author</h5>
          <input
            type="text"
            onChange={(e) => setAuthor(e.target.value)}
            id={styles.articleAuthor}
            placeholder="Your name and surname"
          />
          <Button buttonType={"primary"} onClick={addArticle}>
            Post Article
          </Button>
        </div>
      </div>

      {/* POSTED ARTICLES */}
      <div className={styles.postedArticles}>
        <h4>Browse through our featured articles below</h4>
        {!articles?.length ? (
          <img
            src={spinner}
            alt="loading..."
            style={{
              height: "40px",
              width: "40px",
              marginLeft: "50%",
              marginTop: "4%",
              marginBottom: "4%",
            }}
          />
        ) : (
          articles?.map((article, key) => (
            <div className={styles.articleCon} key={key}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>

              <div id={styles.likes}>
                <IoMdThumbsUp id={styles.thumb} />
                <h5>{article.likes}</h5>
                <br />
              </div>

              <h6>Author: {article.author}</h6>
              <a href={article.link} target="_blank">
                Continue reading!
              </a>
            </div>
          ))
        )}
      </div>
    </>
  );
}
