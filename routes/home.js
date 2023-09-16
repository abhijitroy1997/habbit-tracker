const express = require("express");
const route = express.Router();

const homeController = require("../controllers/home");

route.get("/", homeController.home);
route.use("/home", require("./weekList"));
route.use("/task", require("./task"));

module.exports = route;
