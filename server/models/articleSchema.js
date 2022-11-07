const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
  author: {
    type: Object
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  likes: {
    type: Number,
    required: false,
  },
  likesList: [{type: ObjectId}]
});

module.exports = mongoose.model("articles", articleSchema);