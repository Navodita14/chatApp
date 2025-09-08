const { createConversationTable } = require("../repository/conversation.repo");

const {
  createConversationUserTable,
} = require("../repository/converstaion_members.repo");

const { createMessageTable } = require("../repository/message.repo");

const { createUserTable } = require("../repository/user.repo");

const createTables = async () => {
  createConversationTable();
  createConversationUserTable();
  createMessageTable();
  createUserTable();

  console.log("Tables Created");
};

module.exports = createTables;
