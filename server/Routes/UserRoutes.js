const express = require('express');
const userSchema = require('../models/userSchema');
const router = express();
const bcrypt = require('bcrypt');

//Login the user 
router.post('/loginuser', async (req, res) => {
    const { email, password } = req.body;
    const user = await userSchema.findOne({ email: email });
    if (user) {
        if (await user.comparePassword(password)) {
            console.log(user)
            return res.json(user)
        } else {
            console.log('there was an error')
            return res.json(false)
        }
    } else {
        res.json(false)
    }
})
//Register the user 

userRouter.post('/registeruser', (req, res) => {
    const {
        username,
        email,
        password,
        userRole,
        currentStudyYear,
        earnedBadges,
        followedtags } = req.body

    const userExists = userSchema.findOne({ email });

    if (!userExists) {
        const user = new userSchema({
            username: username,
            email: email,
            password: password,
            userImage: String,
            userRole: userRole,
            currentStudyYear: currentStudyYear,
            earnedBadges: "",
        });

        user.save()
            .then(i => {
                res.json(i)
                console.log(i)
            })
            .catch(err => {
                res.status(400).json({ mssg: err, err: err })
            })

    } else {
        res.json(false)
    }
})