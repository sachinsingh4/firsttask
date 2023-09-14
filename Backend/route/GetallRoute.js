//In this file... i wrote code for get all data from database.

const router = require("express").Router(); //first import rounting from express to make client request method.
const db = require("../db"); //import database connection from db.js file to perform query.

// i am using post mehtod with api /getAll to get all detail of user from database.
router.post("/getAll", (req, res) => {
  const sql = "select * from `tester`";
  db.query(sql, [], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

module.exports = router; //Exporing file router.
