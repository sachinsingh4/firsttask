module.exports = (app) => {
  const router = require("express").Router();
  const controller = require("../controller/controller");

  //creating router for getalldata...
  router.post("/getAll", controller.getAll);

  //creating router for insertion...
  router.post("/", controller.insert);

  //creating router for search
  router.post("/search", controller.search);

  //creating router for update...

  router.post("/update", controller.update);

  //creating router for delete...
  router.post("/delete", controller.delete);

  //calling main api here...
  app.use("/", router);
};
