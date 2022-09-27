// require
const express = require("express");
const bodyParser = require("body-parser");
const connectionDB = require("./db/connection");

// configuration
const app = express();
require("dotenv").config();
app.set("view engie", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

const start = async () => {
  try {
    await connectionDB(process.env.MONGODB_URL);
    app.listen(port, () => {
      console.log(`Server listen on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
