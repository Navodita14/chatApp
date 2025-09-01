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

module.exports= {createConversationTable}