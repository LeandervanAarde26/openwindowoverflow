const express = require('express');
const tagsSchema = require("../models/tagsSchema");
const router = express();


// Get All the tags
router.get('/api/getalltags', async (req, res) => {
    const tags = await tagsSchema.find();
    res.json(tags);
});


router.post('/api/addTag/', async (req, res) => {
    let { name, description } = req.body;
    res.send(tags);
});

module.exports = router; 