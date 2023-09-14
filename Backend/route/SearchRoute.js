//In this file... i perform search operation to get data from database with the help of user input
// we take input from user and pass data from frontend to here and perform search operation on
// that data here.

const router = require("express").Router();
const db = require("../db");

router.post("/search", (req, res) => {
  const name = req.body.name;
  const cityname = req.body.cityname;
  //const sql = "SELECT * FROM `tester` WHERE `name`= ? AND `cityname`= ?";

  const sql =
    "SELECT * FROM `tester` WHERE `name` LIKE '%" +
    name +
    "%' AND `cityname` LIKE '%" +
    cityname +
    "%'";
  db.query(sql, [name, cityname], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });
});

module.exports = router;
