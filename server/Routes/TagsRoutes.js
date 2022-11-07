const express = require('express');
const tagsSchema = require("../models/tagsSchema");
const router = express();


// Get All the tags
router.get('/api/getalltags', async (req, res) => {
    const tags = await tagsSchema.find();
    res.json(tags);
});

router.post('/api/addtag', async (req, res) =>{
    const {tag, description} = req.body

    const checkTag = await tagsSchema.findOne({
        name: tag
    });

    if(checkTag){
        res.status(401).json({msg: "Tag already exists"})
    }

    const newTag = new tagsSchema({
        name: tag,
        description: description
    })

    if(!newTag){
        res.status(400).json({msg: "Tag could not be added"})
    }

    await newTag()


    res.status(200).jsppn(newTag)

})

module.exports = router; 