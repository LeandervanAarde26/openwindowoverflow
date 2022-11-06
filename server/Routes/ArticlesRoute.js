const article = require("../models/articleSchema");
const express = require("express");
const router = express();

// Get All articles
router.get("/api/getarticles", (req, res) => {
  article
    .find()
    .then((article) => res.json(article))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// posting articles
router.post("/api/addarticles", async (req, res) => {
  const newArticle = new article({
    author: req.body.author,
    description: req.body.description,
    link: req.body.link,
    title: req.body.title,
    likes: req.body.likes,
  });

  newArticle
    .save()
    .then(() => res.json("New Article has been posted!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// find article by id
router.get("/api/article/:id", (req, res) => {
  article
    .findById(req.params.id)
    .then((article) => res.json(article))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// find and update
router.patch("/api/updatearticle/:id", (req, res) => {
  article.findById(req.params.id).then((article) => {
    (article.title = req.body.title),
      (article.description = req.body.description),
      (article.link = req.body.link),
      (article.title = req.body.title),
      (article.likes = req.body.likes);
  });

  article
    .save()
    .then(() => res.json("Article has been updated!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// find and delete
router.delete("/api/deletearticle/:id", (req, res) => {
  article
    .findByIdAndDelete(req.params.id)
    .then(() => res.status(400).json("Article has been deleted"));
});

module.exports = router;
