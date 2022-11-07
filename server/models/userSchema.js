const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator')
const jwt = require('jsonwebtoken');

const users = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    activeAccount: {
        type: Boolean,
        default: false
    },
    joined: {
        type: Date,
        default: Date.now
    },
    userToken: String, 
    email: {
        type: String,
        required: [true, 'Please provide a valid email'],
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        select: false
    },
    userImage: {
      type: String,
      default: "http://localhost:3000/static/media/Default1.7155106274af60c59f18.png"  
    },
    userRole: {
        type: String,
        default: "student"
    },
    userSuspension: {
        type: Number,
        default: 0
    },
    userFlags: {
        type: Number,
        default: 0
    },

    userDescription: {
        type: String,
        default: ''
    },
    githubLink: {
        type: String,
        validate: {
            validator: value => validator.isURL(value, { protocols: ['http', 'https', 'ftp'], require_tld: true, require_protocol: true }),
            message: 'Must be a Valid URL'
        },
    },
    currentStudyYear: Number,
    earnedBadges: [{ type: mongoose.Schema.Types.ObjectId, ref: 'badges' }],
    followedTags: [String],
    userQuestions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'questions' }],
    userAnswers: [
        {
            questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'questions' },
        }
    ],
    likedArticles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'articles' }],
    postedArticles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'articles' }],
    userReputation: {
        type: Number,   
        default: 0,
    }
});

users.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
    // console.log(this.password)
    let tokenPayload = {username: this.username, email: this.email}
    this.userToken = await jwt.sign(tokenPayload, process.env.SECRET_TOKEN);
    next();
});

users.methods.comparePassword = async function (userPassword) {
    const matchPasswords = await bcrypt.compare(userPassword, this.password);
    console.log ("Real", this.password)
    console.log("New", userPassword)
    return matchPasswords;
}

module.exports = mongoose.model('user', users)
