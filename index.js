require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = require("./src/app.js");

// Parse JSON bodies using express.json() method (middleware)
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//connect to db
mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connect to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
