const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const db=require("./config/connection");

app.use(express.json());

app.use("/register",require("./routes/register"));
app.use("/login",require("./routes/login"));
app.use("/editprofile",require("./routes/editProfile"));

app.listen(8088, () => {
    console.log("Yey, your server is running on port 8088");
  });