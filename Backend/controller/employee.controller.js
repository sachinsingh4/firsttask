//getall data from table...

const db = require("../db");
exports.getAll = (req, res) => {
  const sql =
    "select * from `tester` INNER JOIN `department` ON tester.d_id=department.d_id";
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
      dept: in string from convert it into string format...
}*/
exports.insert = (req, res) => {
  const name = req.body.name;
  const cityname = req.body.cityname;
  const sql = "SELECT * FROM `tester` WHERE `name`= ? AND `cityname`= ?";

  db.query(sql, [name, cityname], (err, data) => {
    if (err) {
      return res.json("Error");
    } else if (data == "") {
      const sql1 = "INSERT INTO `tester`(`name`,`cityname`,`d_id`) VALUES(?)";
      const values = [
        req.body.name,
        req.body.cityname,
        parseInt(req.body.dept),
      ];
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
  const eid = req.params.eid;
  const sql = "DELETE from `tester` WHERE `eid`=?";
  db.query(sql, [eid], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      const sql =
        "select * from `tester` INNER JOIN `department` ON tester.d_id=department.d_id";
      db.query(sql, [], (err, data) => {
        if (err) {
          return res.json(err);
        } else {
          console.log(data);
          return res.json(data);
        }
      });
    }
  });
};

//Update table...
exports.update = (req, res) => {
  const eid = req.params.eid;
  let name = req.body.name;
  let cityname = req.body.cityname;
  const changename = req.body.changename;
  const changecityname = req.body.changecityname;
  if (name == "") {
    name = changename;
  }
  if (cityname == "") {
    cityname = changecityname;
  }
  const sql =
    "SELECT * FROM `tester` WHERE `name` LIKE '%" +
    name +
    "%' AND `cityname` LIKE '%" +
    cityname +
    "%'";

  db.query(sql, [name, cityname], (err, data) => {
    if (err) {
      res.json(err);
    } else if (data.length == 0 || data[0]["eid"] == eid) {
      const sql = "UPDATE `tester` SET `name` = ?,`cityname`= ? WHERE eid=?";
      db.query(sql, [name, cityname, eid], (err, data) => {
        if (err) {
          return res.json(err);
        } else {
          return res.json(data);
        }
      });
    } else {
      res.send("same data");
    }
  });
};
