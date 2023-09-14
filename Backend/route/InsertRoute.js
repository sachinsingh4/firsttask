//In this file...i performed insertion operation on database and also check the codition that
//if data is already present in the database then it will give msg that data present database.

const router = require("express").Router();
const db = require("../db");

router.post("/", (req, res) => {
  const name = req.body.name;
  const cityname = req.body.cityname;
  const sql = "SELECT * FROM `tester` WHERE `name`= ? AND `cityname`= ?";

  db.query(sql, [name, cityname], (err, data) => {
    if (err) {
      return res.json("Error");
    } else if (data == "") {
      const sql1 = "INSERT INTO `tester`(`name`,`cityname`) VALUES(?)";
      const values = [req.body.name, req.body.cityname];
      db.query(sql1, [values], (err, data) => {
        if (err) {
          return res.json(err);
        } else {
          return res.json(data);
        }
      });
    } else {
      return res.json("Error");
    }
  });
});
module.exports = router;
