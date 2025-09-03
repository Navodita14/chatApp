const express = require("express");
const routes = express.Router();

const converstaion = require("../controller/converstaion.controller");

routes.route('/').post(converstaion.createConversation).get(converstaion.getUserConversations);
routes.get('/:id', converstaion.getConversationById)

module.exports = routes;
