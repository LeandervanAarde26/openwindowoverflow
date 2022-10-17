const express = require('express');
const Question = require("../models/questionSchema");
const tags = require('../models/tagsSchema');
const router = express();

router.post('/api/askquestion', async (req, res) => {
    const {title, author, question, code, tags} = req.body;
    const doc = new Question({title, author, question, code, tags});

    const ret = await doc.save();
    res.json(ret);
});

// router.get('.')

module.exports = router; 