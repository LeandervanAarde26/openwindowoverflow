const express = require('express');
const userSchema = require('../models/userSchema');
const router = express();
const bcrypt = require('bcrypt');
const nodeMailer = require('nodemailer');
const jwt = require('jsonwebtoken');

// Login the user
// http://localhost:5001/api/loginuser

router.post('/api/loginuser', async (req, res) => {

    const { email, password } = req.body
    const user = await userSchema.findOne({
        email: email,
    }).select(['password', 'username', 'activeAccount'])

    if (!user) {
        console.log("Please make sure all fieds are correct")
        return res.status(404).json({ msg: 'User does not exist' });
    }


    const correctPassword = await user.comparePassword(password);

    console.log(correctPassword)

    if (!correctPassword) {
        console.log("Please make sure all fieds are correct password")
        return res.status(404).json({ msg: 'User does not exist' });
    }

    if(!user.activeAccount){
        return res.status(400).json({msg: "The user account is not verified!"})
    }

    // const getFunction = () =>{
    //     let Mike = "Skelm"
    //     let Bronwyn = "Bestie";
    //    // BRONWYN PLEASE NOTICE THAT EVERYONE NOW KNOWS THAT WE ARE BESTIES!
    //     let Reinhardt = "Sexy"
    //     let Wiaan = "Shirtless"
    
    //     if(Wiaan === "Shirtless"){
    //         return console.log("I saw Wiaan Shirtless")
    //       }
    
    // }

    // console.log(user.activeAccount)
    res.status(200).json(user)
});


// Register a new user 
// http://localhost:5001/api/registeruser

router.post('/api/registeruser', async (req, res) => {
    const { username, email, password, userImage, currentStudyYear, followedTags } = req.body
    const findUser = await userSchema.findOne({
        email: email
    });

    if (!findUser) {
        const newUser = new userSchema({
            username: username,
            email: email,
            password: password,
            userImage: userImage,
            currentStudyYear: currentStudyYear,
            followedTags: followedTags
        });

        console.log(newUser)
        newUser.save()
            .then(async user => {
                res.status(200).json({ msg: `user has been added to the db: ${user}` })

                const findUser = await userSchema.findOne({
                    email: email
                });

                let userLink = 'http://localhost:3000/Auth?id=' + findUser._id
                let mailContent = `<h1>Welcome ${user.username} to openOverflow, we are excited to have you here! This is totally not a Skelm/ </h1>
                             <p>Before you can login, we are going to have to verify you...</p>
                             <a href=${userLink}>Click to Verify</a>`;

                const transporter = nodeMailer.createTransport({
                    host: "mail.openoverflow.co.za",
                    port: 465,
                    secure: true,
                    auth: {
                        user: "welcome@openoverflow.co.za",
                        pass: "Fjr5carZG2EvwbM"
                    }
                });

                const mailInformation = {
                    from: '"OpenOverflow welcome" <welcome@openoverflow.com>',
                    to: email,
                    subject: "Welcome! Let's verify!",
                    html: mailContent
                }

                transporter.sendMail(mailInformation, (error, info) => {
                    if (error) {
                        return console.log(error)
                    }
                    console.log(`message sent to ${username}`, info.messageId)
                })
            })
            .catch(err => {
                res.status(400).json({ msg: `The user was not added, there was an eror:`, err: err });
            })
    } else {
        res.status(400).json({ msg: `This user already exists` });
    }
});

//Validate the new user
// http://localhost:5001/api/validateUser


router.patch('/api/validateUser/:id', async (req, res) => {
    let userId = req.params.id;
    const user = await userSchema.findOne({
        _id: userId
    });
    if (user) {
        try {
            const tokenCheck = jwt.verify(user.userToken, process.env.SECRET_TOKEN);
            const authorisedUser = userSchema.findOne({
                _id: userId,
                username: tokenCheck.username,
                email: tokenCheck.email
            });

            if (authorisedUser) {
                const updateStatus = await userSchema.updateOne(
                    { _id: userId },
                    { $set: { activeAccount: true } }
                );
                res.status(200).json({user: authorisedUser.username, msg: 'Account has been validated', stat: true, })
            } else {
                res.status(400).json({ msg: 'Profile was not verified', stat: false })
            }
        } catch (error) {
            res.status(400).json({ msg: 'user token is not valid, try again', stat: false })
        }
    } else {
        res.status(404).json({ msg: 'user not found, please contact support', stat: false })
    }
})

//Get information about the user
// http://localhost:5001/api/individualuser/:
router.get('/api/individualuser/:id', async (req, res) => {
    const user = await userSchema.findById(req.params.id);

    if (!user) {
        res.status(404).json({ msg: 'No user was found with the requested credentials' })
    }

    console.log(user)
    return res.status(200).json(user)
})

module.exports = router; 