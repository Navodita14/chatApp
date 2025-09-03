const pool= require('../db/connectDB')

const createConversationTable= async ()=>{
    try {
        const query= `
        CREATE TABLE IF NOT EXISTS conversations(
        conversation_id serial primary key,
        created_at timestamp default current_timestamp,
        created_by int,
        updated_at timestamp default current_timestamp,
        update_by int
        )`;
         await pool.query(query);
    } catch (error) {
        console.log(error)
    }
}

const createConverstaion= async(id)=>{
    const query= `insert into conversations(created_by, update_by) values ($1, $1) returning conversation_id`;
    const result= await pool.query(query, [id])
    return result.rows[0].conversation_id;
}

const getConvByUserId= async(userId)=>{
    const query= `select c. * from conversations c left join conversation_members cm on c.conversation_id = cm.conversation_id where cm.user_id= $1 order by c.updated_at desc`

    const result= await pool.query(query, [userId])
    // console.log("@@@@@@@@@",result);
    
    return result.rows;

}

const getConvById= async(convoId)=>{
    const query= `Select * from conversations where conversation_id = $1`
    const result= await pool.query(query, [convoId])

    return result.rows
}

// const deleteConvo = async (id)=>{

// }

module.exports= {createConversationTable, createConverstaion, getConvById, getConvByUserId}