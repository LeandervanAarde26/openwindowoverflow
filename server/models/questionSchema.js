const mongoose = require('mongoose')

const question = mongoose.Schema({
    title:{
        type: String,
        required: true,
    }, 
    rating: {
        type: Number,
        default: 0
    }, 
    resolved:{
        type: Boolean,
        default: false
    },
    author:{type: Object},
    answeredBy: {
        author: {type: String},
        date: {type: Date, default: Date.now()}
    },
    postedDate: {
        type: Date,
        default: Date.now()
    }, 
    question:{
        type: String,
        required: true
    }, 
    code: String, 
    Images: String,
    links: String,
    comments: [
        {
            user: {
                type: Object,
            },
            commentDate: {
                type: Date,
                default: Date.now()
            }, 
            flagged: {
                type: Boolean,
                default: false
            },
            flaggedDate:{type: Date},
            comment: String,
        }
    ], 
    tags:[String], 
    answers:[
        {
            user: {type: Object},
            rating: {
                type: Number,
                default: 0
            }, 
            resolved: {
                type: Boolean,
                default: false,
            },
            answer: {
                type: String, 
                required: true
            },
            questionId: {
                type: String,
                required: true
            },
            code: String,
            images: String
        }
    ]
});

module.exports = mongoose.model("questions", question);