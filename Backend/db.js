const mysql = require("mysql");

//conncetion with database.
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "search",
});

module.exports = db;
