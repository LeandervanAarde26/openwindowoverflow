const express = require('express');
const Question = require("../models/questionSchema");
const tags = require('../models/tagsSchema');
const router = express();


// Get All the tags
router.get('/api/askquestion', async (req, res) =>{

    console.log(req.body);

    res.json(req.body)
});

router.post('/api/test', async (req, res) => {
    const {title, author, question, code, tags} = req.body;
    const doc = new Question({title, author, question, code, tags});

    const ret = await doc.save();
    res.json(ret);
});

module.exports = router; 