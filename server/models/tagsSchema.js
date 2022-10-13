const mongoose = require('mongoose')

const tags = mongoose.Schema({
   name:{
    type: String,
    required: true
   }, 
   Description:{
    type: String, 
    required: true,
   },
});

module.exports = mongoose.model("tags", tags)