const pool = require("../db/connectDB");

const createConversationUserTable = async () => {
  try {
    const query = `
        CREATE TABLE IF NOT EXISTS conversation_members(
        conversation_id serial references conversations(conversation_id) on delete cascade,
        converstaion_title varchar(20),
        user_id int not null references users(user_id) on delete cascade,
        primary key(conversation_id, user_id)
        )`;
    await pool.query(query);
  } catch (error) {
    error;
  }
};

const addConversationUser = async (conversation_id, members) => {
  const values = members.map((_, idx) => `($1, $${idx + 2})`).join(",");
  //[32,3,4,6,1]
  const params = [conversation_id, ...members];
  // (params);

  const query = `INSERT INTO conversation_members (conversation_id, user_id) VALUES ${values}`;
  const result = await pool.query(query, params);
  return "Conversation started";
};

module.exports = { createConversationUserTable, addConversationUser };
