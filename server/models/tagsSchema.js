const mongoose = require('mongoose')

const tags = mongoose.Schema({
   tag:{
    type: String,
    required: true
   }, 
   Description:{
    type: String, 
    required: true,
   },
});

module.exports = mongoose.model("tags", tags)