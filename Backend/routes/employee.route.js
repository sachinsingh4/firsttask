module.exports = (app) => {
  const router = require("express").Router();
  const controller = require("../controller/employee.controller");

  //creating router for getalldata...
  router.get("/getAll", controller.getAll);

  //creating router for insertion...
  router.post("/", controller.insert);

  //creating router for search
  router.post("/search", controller.search);

  //creating router for update...

  router.put(`/update/:eid`, controller.update);

  //creating router for delete...
  router.delete(`/delete/:eid`, controller.delete);

  //calling main api here...
  app.use("/api/employee", router);
};
