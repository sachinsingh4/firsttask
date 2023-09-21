//getall data from table...

const db = require("../db");
exports.getAll = (req, res) => {
  const sql = "select * from `tester`";
  db.query(sql, [], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

//Insert into table
/*{
      employename:
      cityname:
}*/
exports.insert = (req, res) => {
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
};

//Search data...
/*Input {
      employeename:
      cityname:
}*/
exports.search = (req, res) => {
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
};

//Delete from table...

/*Input:{
  id:
}*/

exports.delete = (req, res) => {
  const id = req.body.id;
  const sql = "DELETE from `tester` WHERE `id`=?";
  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

//Update table...

exports.update = (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const sql = "UPDATE `tester` SET name = ? WHERE `id`=?";
  db.query(sql, [name, id], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};
