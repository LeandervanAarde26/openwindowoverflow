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
    author:{type: mongoose.Schema.Types.ObjectId, ref: 'users'},
    postedDate: {
        type: Date,
        default: Date.now()
    }, 
    question:{
        type: String,
        required: true
    }, 
    code: String, 
    Images: [String],
    comments: [
        {
            user: {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
            commentDate: {
                type: Date,
            }, 
            flagged: {
                type: Boolean,
                default: false
            },
            flaggedDate:{
                type: Date
            },
            comment: String,
        }
    ], 

    tags:[String], 
})