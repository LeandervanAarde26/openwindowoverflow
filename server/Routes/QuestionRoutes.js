const express = require('express');
const Question = require("../models/questionSchema");
const User = require("../models/userSchema");
const tags = require('../models/tagsSchema');
const questionSchema = require('../models/questionSchema');
const answerSchema = require('../models/answerSchema');
const userSchema = require('../models/userSchema');
const { updateOne } = require('../models/questionSchema');
const router = express();
var mongoose = require('mongoose');


router.post('/api/askquestion', async (req, res) => {
    let { title, author, question, code, tags, Images } = req.body;

    // Find the details of the user that asked the question
    const user = await User.findOne({
        _id: author,
    }).select('username');

    author = user

    const answeredUser = await User.findOne({
        _id: author
    }).select('username')

    let answeredBy = answeredUser;

    const doc = new Question({ title, author, question, code, tags, Images, answeredBy });

    const ret = await doc.save();
    res.json(ret);
});

router.get('/api/questions', async (req, res) => {
    const questions = await Question.find().sort({ postedDate: -1 });

    res.json(questions);
});

router.get('/api/question/:id', async (req, res) => {
    let id = req.params.id;

    const question = await Question.findOne({
        _id: id
    })
    console.log(question)

    res.status(200).json(question)
});

router.patch('/api/question/answer/:userId/:questionId', async (req, res) => {
    let user = req.params.userId;
    let question = req.params.questionId;
    const { answer, code } = req.body;

    const selectedUser = await User.findOne({
        _id: user,
    }).select('username');
    console.log("🚀 ~ file: QuestionRoutes.js ~ line 56 ~ router.patch ~ selectedUser", selectedUser)

    const Question = await questionSchema.findById(question)
    console.log("🚀 ~ file: QuestionRoutes.js ~ line 60 ~ router.patch ~ Question", Question)

    Question.answers.push({
        "user": selectedUser,
        "answer": answer,
        "questionId": question,
        "code": code
    })

    Question.save();
    res.send(true)
});

router.patch('/api/answerquestion/:id', async (res, req) => {
    let id = req.params.question

    const question = await Question.findOne({
        _id: id
    })

    res.status(200).json(question)
})

// http://localhost:5001/api/addComment/
router.patch('/api/addComment/:id', async (req, res) => {
    let { comment, user } = req.body

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

    if (!addComment) {
        res.status(400).json({ msg: "Comment could not be pushed", state: false })
    }
    addComment.save()
    res.status(200).json({ msg: addComment, state: true })
});


router.patch('/api/flagcomment/:id', async (req, res) => {
    let questionId = req.params.id
    let {commentId, flagged} = req.body
    console.log(questionId)

    if(!questionId){
        return res.status(400).json({msg: 'No Question found with id'})
    }

    const question = await Question.findById(questionId);
    if(!question) {
        return res.status(400).json({msg: `No question with ${id} was found.`});
    }

    const comment = await Question.updateOne({
        _id: questionId,
        "comments._id": commentId
    },{
        $set:{
            'comments.$.flagged': flagged
        }
    })

   if(!comment){
    return res.status(400).json({msg: 'Comment was not updated'})
   }

   return res.status(204).json({msg: `Comment ${commentId} was successfully updated.`})
});

module.exports = router; 