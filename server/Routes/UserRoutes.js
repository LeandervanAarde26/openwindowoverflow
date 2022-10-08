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
    }).select(['password', 'username'])

    if (!user) {
         console.log("wrong")
        return res.status(404).json({ msg: 'User does not exist' });
    }

    
    const correctPassword = await user.comparePassword(password);

    console.log(correctPassword)

    if (!correctPassword) {
        console.log("wrong")
        return res.status(404).json({ msg: 'Password is incorrect' });
       
    } 

    // if(!user.activeAccount){
    //     return res.status(400).json({msg: "The user account is not verified!"})
    // }

    console.log(user)
    res.status(200).json(user)
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
        .then(async user => {
            res.status(200).json({msg: `user has been added to the db: ${user}`})

            const findUser = await userSchema.findOne({
                email: email
            });

            let userLink = 'http://localholst:3000/Auth?id='+findUser._id
            let mailContent = `Welcome to __ ${username} we are excited to have you here!`;

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
                from: '"Website Mailer Client" <welcome@openoverflow.com>',
                to: email,
                subject: "Welcome! Let's verify!",
                html: mailContent
            }

            transporter.sendMail(mailInformation, (error, info) =>{
                if (error){
                    return console.log(error)
                }
                console.log(`message sent to ${username}`, info.messageId)
            })
        })
        .catch(err => {
            res.status(400).json({msg: `The user was not added, there was an eror:`, err: err});
        })
    } else{
        res.status(400).json({msg: `This user already exists`});
    }  
});

//Validate the new user
// http://localhost:5001/api/validateUser


// router.patch('/api/validateUser/:id', async (req, res) =>{
//     let userId = req.params.id;
//     const user = await UserSchema.findOne({
//         _id: userId
        
//     });

//     if(user){
//         try {
//             let decryptedToken = jwt.verify(user.userToken, process.env.SECRET_TOKEN);
    
//             const authorisedUser = user.findOne({
//                 username: decryptedToken.username,
//                 email: decryptedToken.email
//             });
    
//             if(authorisedUser){
//                 const update = user.updateOne(
//                     {_id: userId},
//                     {$set: {activeAccount: true}}
//                 )
//             } else{
//                 res.status(400).status({msg:'user is not verified, please verify account'})
//             }
//         } catch (err) {
            
//         } 

//     }else {
//         res.status(404).json({msg: "The user is not verified, please contact support"})
//     } 
// })


//Get information about the user
// http://localhost:5001/api/individualuser/:
router.get('/api/individualuser/:id', async (req, res) =>{
    const user = await userSchema.findById(req.params.id);

    if(!user){
        res.status(404).json({msg: 'No user was found with the requested credentials'})
    }  

    console.log(user)
    return res.status(200).json(user)
})


module.exports = router; 