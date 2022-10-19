const express = require('express');
const Question = require("../models/questionSchema");
const User = require("../models/userSchema");
const tags = require('../models/tagsSchema');
const questionSchema = require('../models/questionSchema');
const userSchema = require('../models/userSchema');
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

    res.status(200).json(question)
})

router.patch('/api/answerquestion/:id', async (res, req) =>{
    let id = req.params.question
    
    const question = await Question.findOne({
      _id: id  
    })

    res.status(200).json(question)
})

// http://localhost:5001/api/addComment/
router.patch('/api/addComment/:id', async (req,res) =>{
    let {comment, user} = req.body

    const addComment = await Question.findById(req.params.id)
    const auth = await User.findOne({
        _id: user,
    }).select('username');

    console.log("🚀 ~ file: QuestionRoutes.js ~ line 13 ~ router.post ~ user", auth)

    addComment.comments.push(
        {
                user: auth,
                comment: comment
        } 
    )

    if(!addComment){
        res.status(400).json({msg: "Comment could not be pushed"})
    }
    addComment.save()
    res.status(200).json({msg: addComment})
    console.log(auth)
});


// router.get('/api/getQuestions/:tag',async (req,res) =>{
//     let tag = req.params.tag
//     const tags = await questionSchema.find({ tags: tag})
    
//     res.json(tags)
// })

// router.get('.')

module.exports = router; 