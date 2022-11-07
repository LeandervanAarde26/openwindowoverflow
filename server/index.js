const express = require("express");
require("dotenv/config");
const mongoose = require("mongoose");
//add routes
const tagsRouter = require("./Routes/TagsRoutes");
const userRouter = require("./Routes/UserRoutes");
const questionRouter = require("./Routes/QuestionRoutes");
const articlesRouter = require("./Routes/ArticlesRoute");

const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5001;
const uri = process.env.DB_CONNECTION;
//Next line is irrelevant, its just a test for something
// const db = mongoose.connection.useDb('dbname')

//app.use
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(userRouter);
app.use(tagsRouter);
app.use(questionRouter);
app.use(articlesRouter);

// connection
mongoose.connect(uri, (err) => {
  err ? console.log("not connected to DB") : console.log("Connected to DB");
});

app.listen(PORT, () => {
  console.log(`Server is now running on ${PORT}`);
});
