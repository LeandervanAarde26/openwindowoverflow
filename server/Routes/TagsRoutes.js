const express = require('express');
const tagsSchema = require("../models/tagsSchema");
const router = express();


// Get All the tags
router.get('/api/getalltags', async (req, res) =>{
    const tags = await tagsSchema.find();
    res.json(tags);
});

router.post('/api/addtag', async (req, res) =>{
    const {tag, description} = req.body

    console.log(tag)
    console.log(description)

    const checkTag = await tagsSchema.findOne({
        name: tag
    });

    console.log(checkTag)

    if(!checkTag){
    
        const newTag = new tagsSchema({
            name: tag,
            Description: description
        })
    
        console.log(newTag)
    
        try {
        await newTag.save()
        .then(res =>{
           return res.status(200).json(res)
        })
        .catch(err =>{
            // return res.status(200).json(res)
           return res.status(401).json("Could not be added" + err)
        }) 
        } catch (error) {
            console.log(err)
        }
        // console.log(newTag)
    }

    res.status(400).json({msg: "Tag already exists"})




})

module.exports = router; 