const express = require("express");
const cors = require("cors");
const app = express();

//Importing insert, search, getall file from route folder...
const insertRoute = require("./route/InsertRoute");
const searchRoute = require("./route/SearchRoute");
const getallRoute = require("./route/GetallRoute");

app.use(cors());
app.use(express.json());

//middleware...comes in the middle of the request and response cycle of the node. js execution.

app.use("/", insertRoute);
app.use("/", searchRoute);
app.use("/", getallRoute);

/*
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "search",
});


app.post("/", (req, res) => {
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

app.post("/search", (req, res) => {
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

app.post("/getAll", (req, res) => {
  const sql = "select * from `tester`";
  db.query(sql, [], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});
*/

//Backend is running on the port 8081.
app.listen(8081, () => {
  console.log("App is runnning");
});
