const convoRepo= require('../repository/conversation.repo')
const convoMemRepo= require('../repository/converstaion_members.repo')

const createNewConversation= async(members, id)=>{
    const conversationId= await convoRepo.createConverstaion(id);
    console.log(conversationId);
    members=[...members, id]
    const addConversationMember= await convoMemRepo.addConversationUser(conversationId, members);
    console.log(members, addConversationMember);
    

    return addConversationMember;
}

module.exports={createNewConversation}