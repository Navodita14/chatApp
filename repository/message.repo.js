const pool = require("../db/connectDB");

const createMessageTable = async () => {
  try {
    const query = `
        CREATE TABLE IF NOT EXISTS messages(
        message_id serial primary key,
        message_content text not null,
        converstaion_id int not null references conversations(conversation_id) on delete cascade,
        sender_id int not null references users(user_id) on delete cascade,
        is_read boolean default false,
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

module.exports = { createMessageTable };
