const mongoose = require('mongoose')

const answer = mongoose.Schema({
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
});

module.exports = mongoose.model("answer", answer);