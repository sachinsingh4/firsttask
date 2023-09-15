const express = require("express");
const cors = require("cors");
const app = express();

//middleware...comes in the middle of the request and response cycle of the node. js execution.
app.use(cors());
app.use(express.json());

//calling route folder here
require("./routes/route")(app);

//Server...Backend is running on the port 8081.
app.listen(8081, () => {
  console.log("App is runnning");
});
