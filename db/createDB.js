const { Client } = require("pg");
require("dotenv").config();

// creating db
const createDatabase = async () => {
  const dbUrl = new URL(process.env.DATABASE_URL);

  const dbName = dbUrl.pathname.replace("/", "");

  dbUrl.pathname = "/postgres";

  const client = new Client({
    connectionString: dbUrl.toString(),
  });
  await client.connect();

  // console.log("+++++++++++++++++++++++++");

  //  console.log(`Intended database name: "${dbName}"`);
  // console.log("+++++++++++++++++++++++++");

  const res = await client.query(
    `SELECT 1 FROM pg_database WHERE datname = $1`,
    [dbName]
  );

  // console.log(res);
// 

  if (res.rowCount === 0) {
    await client.query(`CREATE DATABASE "${dbName}"`);
    console.log(`Database ${dbName} created`);
  } else {
    console.log(`Database ${dbName} already exists`);
  }

  await client.end();
};

module.exports = createDatabase;
