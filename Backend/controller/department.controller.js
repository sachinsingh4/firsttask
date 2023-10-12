const db = require("../db");

exports.findAll = (req, res) => {
  const sql = "select * from `department`";
  db.query(sql, [], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};
