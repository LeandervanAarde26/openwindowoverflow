const article = require("../models/articleSchema");
const User = require("../models/userSchema");
const express = require("express");
const router = express();

// Get All articles
router.get("/api/getarticles", (req, res) => {
  article
    .find()
    .sort({date: -1})
    .then((article) => res.json(article))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// posting articles
router.post("/api/addarticles/:id", async (req, res) => {
  const userID = req.params.id
  const {description, title, link} = req.body

  const find = await User.findOne({_id: userID}).select(['username', '_id'])

  const newArticle = new article({
    author: find,
    description: description,
    link: link,
    title: title,
    likes: 0,
  });

  newArticle
    .save()
    .then(() => res.send("True"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// find article by id
// router.get("/api/article/:id", (req, res) => {
//   article
//     .findById(req.params.id)
//     .then((article) => res.json(article))
//     .catch((err) => res.status(400).json(`Error: ${err}`));
// });

// find and update
router.patch("/api/updatearticle/:id", (req, res) => {
  article.findById(req.params.id).then((article) => {
    (article.title = req.body.title),
      (article.description = req.body.description),
      (article.link = req.body.link),
      (article.title = req.body.title),
      (article.likes = req.body.likes);
  })
  
  

  article
    .save()
    .then(() => res.json("Article has been updated!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
})

router.patch("/api/likeArticle/:type", async (req, res) => {
    let type = req.params.type;
    let {artId, list} = req.body;

    if(type == 'up') {
        const art = await article.updateOne({
            _id: artId
        }, {
            $inc: {likes: 1},
            $set: {
                'likesList': list
            }
        })

        if(!art){
            return res.status(400).json({msg: 'Question vote was not updated'})
        } else {
            return res.send(true)
        }
    } else if(type == 'down') {
        const art = await article.updateOne({
            _id: artId
        }, {
            $inc: {likes: -1},
            $set: {
                'likesList': list
            }
        })

        if(!art){
            return res.status(400).json({msg: 'Question vote was not updated'})
        } else {
            return res.send(true)
        }
    }
});


// find and delete
router.delete("/api/deletearticle/:id", (req, res) => {
  article
    .findByIdAndDelete(req.params.id)
    .then(() => res.status(400).json("Article has been deleted"));
});

module.exports = router;
