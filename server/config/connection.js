const mysql = require("mysql");

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "fitness_life",
  });

  module.exports = db;