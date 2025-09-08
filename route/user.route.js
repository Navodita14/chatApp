const express = require("express");
const routes = express.Router();

const user = require("../controller/user.controller");

routes.get(`/`, user.getUsers);

module.exports = routes;
