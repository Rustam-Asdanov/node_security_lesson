// require
const express = require("express");
const bodyParser = require("body-parser");
const connectionDB = require("./db/connection");
const main_router = require("./router/main_router");
const authorization_router = require("./router/authorization_router");

// configuration
const app = express();
require("dotenv").config();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

// router
app.use("/", authorization_router);
app.use("/main", main_router);

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
