const { StatusCodes } = require("http-status-codes");
const service = require("../services/message.service");
const createMessage =async (req, res) => {
  const { message_content} = req.body;
  let conversation_id = req.params.conversationId
  // console.log(conversation_id.conversationId);
  const convId=conversation_id.conversationId
  // conversation_id= parseInt(conversation_id,10)
  const sender_id = req.user.id; 
  // sender_id=sender_id.map(Number)// from auth middleware
  const message = await service.createMessageService({ message_content, conversation_id, sender_id });
  res.status(StatusCodes.CREATED).json({ success: true, data: message });
};

const getMessagesByConversationId = async (req, res) => {
  const { conversationId } = req.params;
  // console.log(conversationId);
  
  const messages = await service.getMessagesByConversationIdService(conversationId);
  res.status(StatusCodes.OK).json({ success: true, data: messages });
};
// // READ one
// const getMessageById = asyncWrapper(async (req, res) => {
//   const { id } = req.params;
//   const message = await service.getMessageByIdService(id);
//   if (!message) {
//     return res.status(StatusCodes.NOT_FOUND).json({ success: false, msg: "Message not found" });
//   }
//   res.status(StatusCodes.OK).json({ success: true, data: message });
// });
// UPDATE
const updateMessage = async (req, res) => {
  const { id } = req.params;
  const updated = await service.updateMessageService(id);
  res.status(StatusCodes.OK).json({ success: true, data: updated });
};
// DELETE
const deleteMessage = async (req, res) => {
  const { id } = req.params;
  const deleted = await service.deleteMessageService(id);
  res.status(StatusCodes.OK).json({ success: true, data: deleted });
};
module.exports = {
  createMessage,
  getMessagesByConversationId,
  updateMessage,
  deleteMessage,
};





