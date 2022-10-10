const express = require('express');
const tagsSchema = require("../models/tagsSchema");
const router = express();


// Get All the tags

router.get('/api/getalltags', async (req, res) =>{
    const tags = await tagsSchema.find();
    res.json(tags);
});

module.exports = router; 