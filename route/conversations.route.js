const express = require("express");
const routes = express.Router();

const converstaion = require("../controller/converstaion.controller");

routes.post(`/`,converstaion.conversation);
// routes.post(`/register`, register);

module.exports = routes;
