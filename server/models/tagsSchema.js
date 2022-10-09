const mongoose = require('mongoose')

const tags = mongoose.Schema({
   tag:{
    type: String,
    required: true
   }, 
   description:{
    type: String, 
    required: true,
   },
   questions:[{type: mongoose.Schema.Types.ObjectId, ref: 'questions'}]
});

module.exports = mongoose.model("tags", tags)