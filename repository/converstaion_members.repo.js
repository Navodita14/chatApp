const pool = require("../db/connectDB");

const createConversationUserTable = async () => {
  try {
    const query = `
        CREATE TABLE IF NOT EXISTS conversation_members(
        conversation_id serial references conversations(conversation_id) on delete cascade,
        sender_id int not null references users(user_id) on delete cascade,
        created_at timestamp default current_timestamp,
        created_by int,
        updated_at timestamp default current_timestamp,
        update_by int
        )`;
    await pool.query(query);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createConversationUserTable };
