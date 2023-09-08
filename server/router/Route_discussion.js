const express = require('express');
const router = express.Router();
require('../db/corn');
const Comm = require('../models/discussdb')
const User = require('../models/user_data')
const cookies = require("cookie-parser");
const jwt = require('jsonwebtoken');

router.use(cookies());

const dotenv = require("dotenv")
const path = require('path')
dotenv.config({ path: './config.env' })

// check user is login or not .
router.get('/discuss', async (req, res) => {
  try {
    const comment = await Comm.find();
    res.status(200).json(comment);
  }
  catch (error) {
    res.status(404).json("Server Timeout");
  }
});

router.post('/threadcomment', async (req, res) => {
  try {
    const { id, user_name, comment} = req.body;
    if (user_name == '') {
      return res.status(404).json("Not Logged in");
    }
    let commentarray = await Comm.findOne({ _id: id }).select({ _id: false, comments: true });
    let comments = commentarray.comments;
    comments.push({ user_name, comment });
    await Comm.findOneAndUpdate({ _id: id }, { $set: { comments } });
    const commentresult = await Comm.find();
    res.json(commentresult);
  }
  catch (error) {
    res.send("Not Logged in");
  }
});

router.post('/thread', async (req, res) => {
  try {
    console.log("Thread");
    const { user_name, post, title } = req.body;
    console.log(user_name,post,title);
    if (user_name == '') {
      return res.status(404).json("Not Logged in");
    }
    if (post == '') {
      let commentarray = await Comm.findOne({ _id: id }).select({ _id: false, comments: true });
      let comments = commentarray.comments;
      comments.push({ user_name, comment });
      await Comm.findOneAndUpdate({ _id: id }, { $set: { comments } });
    } else {
      const data = new Comm({ Uname: user_name, post: post, title: title })
      await data.save();
    }
    const comments = await Comm.find();
    res.json(comments);
  }
  catch (error) {
    res.send("Not Logged in");
  }
});

router.get('/mypost', async (req, res) => {
  try {
    const token = req.cookies.jwt;
    const verifyUser = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findOne({ _id: verifyUser._id });
    const comment = await Comm.find({ Uname: user.name }).select({ Uname: true, post: true, comments: true });
    res.status(200).json(comment);
  }
  catch (error) {
    res.status(404).json("Server Timeout");
  }
});


module.exports = router;