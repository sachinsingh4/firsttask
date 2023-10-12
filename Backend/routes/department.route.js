module.exports = (app) => {
  const router = require("express").Router();
  const controller = require("../controller/department.controller");

  router.get("/getAll", controller.findAll);

  app.use("/api/department", router);
};
