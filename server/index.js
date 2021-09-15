const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const db=require("./config/connection");

app.use(express.json());

app.use("/register",require("./routes/register"));
app.use("/login",require("./routes/login"));
app.use("/editprofile",require("./routes/editProfile"));
app.use("/memberList",require("./routes/memberList"));
app.use("/approve",require("./routes/approve"));
app.use("/approvediet",require("./routes/approvediet.js"));
app.use("/appointmentList",require("./routes/appointmentList"));
app.use("/approveList",require("./routes/approveList"));
app.use("/dietplanList",require("./routes/dietplanList"));

app.listen(8088, () => {
    console.log("Yey, your server is running on port 8088");
  });