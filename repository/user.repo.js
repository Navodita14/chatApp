const pool= require('../db/connectDB')

const createUserTable= async ()=>{
    try {
        const query= `
        CREATE TABLE IF NOT EXISTS users(
        user_id serial primary key,
        fullname varchar(20) not null,
        email varchar(50) unique not null,
        password text not null,
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

module.exports= {createUserTable}