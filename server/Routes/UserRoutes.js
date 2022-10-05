const express = require('express');
const userSchema = require('../models/userSchema');
const router = express();
const bcrypt = require('bcrypt');
const nodeMailer = require('nodemailer')



// Login the user
// http://localhost:5001/api/loginuser

router.get('/api/loginuser', async (req, res) => {

    const { email, password } = req.body
    const user = await UserSchema.findOne({
        email: email,
        password: password
    })

    if (!user) {
        return res.status(404).json({ msg: 'User does not exist' });
    }
    const correctPassword = user.comparePassword(password);

    if (!correctPassword) {
        return res.status(404).json({ msg: 'Password is incorrect' });
    }

    console.log(user)
    res.status(400).json(user)
});


// Register a new user 
// http://localhost:5001/api/registeruser

router.post('/api/registeruser', async (req, res) =>{
    const {username, email, password, userImage, currentStudyYear, followedTags} = req.body
    const findUser = await userSchema.findOne({
        email: email
    });

    if(!findUser){
        const newUser = new userSchema({
            username: username,
            email: email,
            password: password,
            userImage: userImage,
            currentStudyYear: currentStudyYear,
            followedTags: followedTags
        });

        newUser.save()
        // .then(async user => {
        //     res.status(200).json({msg: `user has been added to the db: ${user}`})

        //     const findUser = await userSchema.findOne({
        //         email: email
        //     });

        //     let userLink = 'http://localholst:3000/Auth?id='+findUser._id
        //     let mailContent = `Welcome to __ ${username} we are excited to have you here!`;

        //     const transporter = nodeMailer.createTransport({
        //         host: "Enter host here <- mail.patterntry.com is the example one",
        //         port: 000,
        //         secure: true,
        //         auth: {
        //             user: "Someemail@email.com",
        //             pass: "Enter password here"
        //         }
        //     });

        //     const mailInformation = {
        //         from: '"Website Mailer Client" <mailer@something.com',
        //         to: email,
        //         subject: "Welcome! Let's verify!",
        //         html: mailContent
        //     }

        //     transporter.sendMail(mailInformation, (error, info) =>{
        //         if (error){
        //             return console.log(error)
        //         }
        //         console.log(`message sent to ${username}`, info.messageId)
        //     })

        // })
        // .catch(err => {
        //     res.status(400).json({msg: `The user was not added, there was an eror:`, err: err});
        // })
    } else{
        res.status(400).json({msg: `This user already exists`});
    }  
});

//Validate the new user
// http://localhost:5001/api/verifyuser


// router.patch('/api/verifyuser', async (req, res) =>{
//     let userId = req.params.dictionary;

//     const user = await AudioScheduledSourceNode.findOne({
//         _id: userId
//     });

// })


module.exports = router; 