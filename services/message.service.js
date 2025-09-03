const repo = require("../repository/message.repo");

async function createMessageService(data) {
  return await repo.createMessage(data);
}
async function getMessagesByConversationIdService(conversation_id) {
  return await repo.getMessagesByConversationId(conversation_id);
}
// async function getMessageByIdService(message_id) {
//   return await repo.getMessageById(message_id);
// }
async function updateMessageService(message_id) {
  return await repo.updateMessage(message_id);
}
async function deleteMessageService(message_id) {
  return await repo.deleteMessage(message_id);
}
module.exports = {
  createMessageService,
  getMessagesByConversationIdService,
  updateMessageService,
  deleteMessageService,
};