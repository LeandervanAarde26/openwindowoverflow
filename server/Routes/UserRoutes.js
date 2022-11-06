const express = require('express');
const userSchema = require('../models/userSchema');
const questionSchema = require('../models/questionSchema');
const router = express();
const bcrypt = require('bcrypt');
const nodeMailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const { isValidObjectId } = require('mongoose');
const { ObjectId } = require('mongodb');

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
            userDescription: '',
            followedTags: followedTags,
            // githubLink: ''
        });

        newUser.save()
            .then(async user => {
                res.status(200).json({ msg: `user has been added to the db: ${user}` })

                const findUser = await userSchema.findOne({
                    email: email
                });

                let userLink = 'http://localhost:3000/Auth?id=' + findUser._id
                
                let mailContent = `<div 
                style="
                    text-align: center;
                    width: 100%;
                    max-width: 50%;
                    background-color: #FFFFFF;
                    margin: auto;
                    border-radius: 50px;
                    padding: 50px 10px;
                    color: black;
                "
            >
                <div 
                    style="
                        margin: auto;
                        gap: 30px;
                        background-color: #F0F0F0;
                        width: 100%;
                        padding: 40px 20px;
                        color: black;
                    "
                >
        
                    <div
                        style="
                            textAlign: center;
                            gap: 30px;
                            margin-bottom: 40px;
                            color: black;
                        "
                    >
                        <img
                            src='https://openoverflow.s3.af-south-1.amazonaws.com/Vector.png'
                            style="
                                height: 50px;
                                color: black;
                            "
                        />
        
                        <h1
                            style="
                                width: 100%;
                                font-weight: 400;
                                color: black;
                            "
                        >
                            Welcome <b>${user.username}</b>
                        </h1>
        
                        <p
                            style="
                                fontSize: 18px;
                                color: black;
                            "
                        >
                            We are excited to have you part of the OpenOverflow community!
                        </p>
                    </div>
                    <div 
                        className={styles.bottom}
                        style="
                            margin: auto;
                            text-align: center;
                            width: 50%;
                            padding: 20px;
                            background-color: #FFFFFF;
                            border-radius: 50px;
                            gap: 20px;
                            color: black;
                        "
                    >
                        <img 
                            src='https://openoverflow.s3.af-south-1.amazonaws.com/email_Image.png'
                            style="
                                height: 100px;
                                margin-bottom: 20px;
                                color: black;
                            "
                        />
        
                        <p
                            style="
                                text-align: center;
                                margin-bottom: 20px;
                                color: black;
                            "
                        >
                            Before your account can be activated we need to verify you. Please click the button below to begin this process
                        </p>
        
                        <button
                            style="
                                padding: 10px 5px;
                                background-color: black;
                            "}}"
                        >
                            <a href=${userLink}
                                style="color: white;"
                            >Get Started</a>
                        </button>
                    </div>
                </div>
            </div>`

                const transporter = nodeMailer.createTransport({
                    host: "mail.openoverflow.co.za",
                    port: 465,
                    secure: true,
                    auth: {
                        user: "welcome@openoverflow.co.za",
                        pass: "F)!lO4f3%6qp"
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

    // console.log(user)
    return res.status(200).json(user)
})

// http://localhost:5001/api/edituser/:
router.patch('/api/edituser/:id', async (req, res) =>{
    const {username, currentStudyYear, userDescription, githubLink, userImage} = req.body
    const editUser = await userSchema.updateOne(
        {_id: req.params.id},
        {
            $set: {
                username: username,
                currentStudyYear: currentStudyYear,
                userDescription: userDescription,
                githubLink: githubLink,
                userImage: userImage
            },
        }
    );

   if (! editUser){
    res.status(400).json({msg: "Something went wrong in the update, please try again", user: NaN})
   }

   res.status(200).json({msg: "User has been update", user: editUser})
})

router.get('/api/auth/:id', async (req, res) => {
    let id = req.params.id;
    let isValidId = isValidObjectId(id);

    if (isValidId) {
        const user = await userSchema.findById(req.params.id);
        
        if (!user) {
            res
            .send(false)
        } else {
            res
            .status(200)
            .send(true)
        }
    } else {
        res
        .send(false)
    }
});

router.get('/api/getUserQuestionsandAnswers/:id', async (req, res) => {
    let id = req.params.id;
    console.log(id);

    const question = await questionSchema.find(
        {"author._id": {$eq: ObjectId(id)}}
        );

    const test = await questionSchema.find(
        {"answers.user._id": {$eq: ObjectId(id)}}
    )

    res
    .status(200)
    .json({questions: question, answers: test})
});




router.post('/api/resetpassword', async (req, res) =>{
    const user = await userSchema.findOne({
        email: req.body.email
    })

    if(!user){
        res.status(404).json({msg: "User with email has not been found!"})
    }
    let userIdLink = "http://localhost:3000/updatepassword?id=" + user._id;

    let mailContent = `<div 
    style="
        text-align: center;
        width: 100%;
        max-width: 50%;
        background-color: #FFFFFF;
        margin: auto;
        border-radius: 50px;
        padding: 50px 10px;
        color: black;
    "
>
    <div 
        style="
            margin: auto;
            gap: 30px;
            background-color: #F0F0F0;
            width: 100%;
            padding: 40px 20px;
            color: black;
        "
    >

        <div
            style="
                textAlign: center;
                gap: 30px;
                margin-bottom: 40px;
                color: black;
            "
        >
            <img
                src='https://openoverflow.s3.af-south-1.amazonaws.com/Vector.png'
                style="
                    height: 50px;
                    color: black;
                "
            />

            <h1
                style="
                    width: 100%;
                    font-weight: 400;
                    color: black;
                "
            >
                Hi, <b>${user.username}</b> !
            </h1>

            <p
                style="
                    fontSize: 18px;
                    color: black;
                "
            >
                Forgotten your password? Let's reset it!
            </p>
        </div>
        <div 
            className={styles.bottom}
            style="
                margin: auto;
                text-align: center;
                width: 50%;
                padding: 20px;
                background-color: #FFFFFF;
                border-radius: 50px;
                gap: 20px;
                color: black;
            "
        >
            <img 
                src='https://openoverflow.s3.af-south-1.amazonaws.com/email_Image.png'
                style="
                    height: 100px;
                    margin-bottom: 20px;
                    color: black;
                "
            />

            <p
                style="
                    text-align: center;
                    margin-bottom: 20px;
                    color: black;
                "
            >
               Click on the link below to edit your existing password into something more memorable! 
            </p>

            <button
                style="
                    padding: 10px 5px;
                    background-color: black;
                "}}"
            >
                <a href=${userIdLink}
                    style="color: white;"
                >Get Started</a>
            </button>
        </div>
    </div>
</div>`

const transporter = nodeMailer.createTransport({
    host: "mail.openoverflow.co.za",
    port: 465,
    secure: true,
    auth: {
        user: "welcome@openoverflow.co.za",
        pass: "F)!lO4f3%6qp"
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
    res.status(200).json({msg: "Message was sent to user"})
})
});




//Add an admin

router.post('/api/addAmin', async (req, res) => {
    const { username, email, password, userImage } = req.body
    const findUser = await userSchema.findOne({
        email: email
    });

    if (!findUser) {
        const newUser = new userSchema({
            username: username,
            email: email,
            password: password,
            userImage: userImage,
            userRole: "Admin",
            currentStudyYear: 0,
            userDescription: '',
    
        });

        newUser.save()
            .then(async user => {
                res.status(200).json({ msg: `user has been added to the db: ${user}` })

                const findUser = await userSchema.findOne({
                    email: email
                });

                let userLink = 'http://localhost:3000/Auth?id=' + findUser._id
                
                let mailContent = `<div 
                style="
                    text-align: center;
                    width: 100%;
                    max-width: 50%;
                    background-color: #FFFFFF;
                    margin: auto;
                    border-radius: 50px;
                    padding: 50px 10px;
                    color: black;
                "
            >
                <div 
                    style="
                        margin: auto;
                        gap: 30px;
                        background-color: #F0F0F0;
                        width: 100%;
                        padding: 40px 20px;
                        color: black;
                    "
                >
        
                    <div
                        style="
                            textAlign: center;
                            gap: 30px;
                            margin-bottom: 40px;
                            color: black;
                        "
                    >
                        <img
                            src='https://openoverflow.s3.af-south-1.amazonaws.com/Vector.png'
                            style="
                                height: 50px;
                                color: black;
                            "
                        />
        
                        <h1
                            style="
                                width: 100%;
                                font-weight: 400;
                                color: black;
                            "
                        >
                            Welcome <b>${user.username}</b>
                        </h1>
        
                        <p
                            style="
                                fontSize: 18px;
                                color: black;
                            "
                        >
                            We are excited to have you part of the OpenOverflow community!
                        </p>
                    </div>
                    <div 
                        className={styles.bottom}
                        style="
                            margin: auto;
                            text-align: center;
                            width: 50%;
                            padding: 20px;
                            background-color: #FFFFFF;
                            border-radius: 50px;
                            gap: 20px;
                            color: black;
                        "
                    >
                        <img 
                            src='https://openoverflow.s3.af-south-1.amazonaws.com/email_Image.png'
                            style="
                                height: 100px;
                                margin-bottom: 20px;
                                color: black;
                            "
                        />
        
                        <p
                            style="
                                text-align: center;
                                margin-bottom: 20px;
                                color: black;
                            "
                        >
                            Before your account can be activated we need to verify you. Please click the button below to begin this process
                        </p>
        
                        <button
                            style="
                                padding: 10px 5px;
                                background-color: black;
                            "}}"
                        >
                            <a href=${userLink}
                                style="color: white;"
                            >Get Started</a>
                        </button>
                    </div>
                </div>
            </div>`

                const transporter = nodeMailer.createTransport({
                    host: "mail.openoverflow.co.za",
                    port: 465,
                    secure: true,
                    auth: {
                        user: "welcome@openoverflow.co.za",
                        pass: "F)!lO4f3%6qp"
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

module.exports = router; 