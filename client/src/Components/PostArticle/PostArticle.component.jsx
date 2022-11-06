import React, { useRef } from "react";
import styles from "./PostArticle.module.scss";
import Button from "../Button/Button.component";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdThumbsUp } from "react-icons/io";
import spinner from "../../Assets/loadingGif.gif";

export default function PostArticle({ articles }) {
  // SEARCH FILTER
  const [searchTerm, setSearchTerm] = useState("");

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
    <div className={styles.container}>
      
    </div>
  );
}
