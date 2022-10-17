const express = require('express');
const Question = require("../models/questionSchema");
const User = require("../models/userSchema");
const tags = require('../models/tagsSchema');
const router = express();

router.post('/api/askquestion', async (req, res) => {
    let {title, author, question, code, tags} = req.body;

    const user = await User.findOne({
        _id: author,
    }).select('username');
    console.log("🚀 ~ file: QuestionRoutes.js ~ line 13 ~ router.post ~ user", user)

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

// router.get('.')

module.exports = router; 