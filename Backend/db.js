const dbConfig = require("./config/dbConfig");
const mysql = require("mysql");
//conncetion with database.
const db = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});
db.connect((err, res) => {
  if (err) {
    console.log(err);
  } else console.log("connected with DB");
});

module.exports = db;
