const { StatusCodes } = require("http-status-codes");
const convoService= require('../services/conversation.service')

const conversation=async (req , res)=>{
    const dataMember= req.body
    const user= req.user;
    console.log('*',user,'*', senderId, recieversId);
    
    const members=[...dataMember]
    const data=await convoService.createNewConversation(members, user.id)
    // console.log(data);
    
    res.status(StatusCodes.OK).json({msg: data})
}



module.exports={conversation}