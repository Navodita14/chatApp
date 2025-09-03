const convoRepo= require('../repository/conversation.repo')
const convoMemRepo= require('../repository/converstaion_members.repo')

const createNewConversation= async(members, id)=>{
    const conversationId= await convoRepo.createConverstaion(id);
    // console.log("@@@@@@@@@@@",conversationId);
    members=[...members, id]
    members= members.map(Number)
    // console.log(members);
    
    const addConversationMember= await convoMemRepo.addConversationUser(conversationId, members);
    // console.log(members, addConversationMember);
    

    return addConversationMember;
}

async function getUserConversationsService(userId) {
  return await convoRepo.getConvByUserId(userId);
}


async function getConversationByIdService(id) {
  return await convoRepo.getConvById(id);
}

module.exports={createNewConversation, getConversationByIdService, getUserConversationsService}