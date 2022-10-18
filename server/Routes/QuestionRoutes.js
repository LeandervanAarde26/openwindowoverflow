const express = require('express');
const Question = require("../models/questionSchema");
const User = require("../models/userSchema");
const tags = require('../models/tagsSchema');
const router = express();

router.post('/api/askquestion', async (req, res) => {
    let {title, author, question, code, tags} = req.body;

    // Find the details of the user that asked the question
    const user = await User.findOne({
        _id: author,
    }).select('username');
    console.log("🚀 ~ file: QuestionRoutes.js ~ line 13 ~ router.post ~ user", user)

    // Author set to object of {
    // _id: "user_id"
    // username: "username"
    //}
    author = user;

    const answeredUser = await User.findOne({
        _id: author
    }).select('username')
    console.log("🚀 ~ file: QuestionRoutes.js ~ line 20 ~ router.post ~ answeredUser", answeredUser)

    let answeredBy = answeredUser;

    const doc = new Question({title, author, question, code, tags, answeredBy});

    const ret = await doc.save();
    res.json(ret);
});

router.get('/api/questions', async (req, res) => {
    const questions = await Question.find();
    res.json(questions);
});

router.get('/api/question/:id', async (req, res) => {
    let id = req.params.id;

    const question = await Question.findOne({
        _id: id
    })
    console.log(question)
})

module.exports = router; 