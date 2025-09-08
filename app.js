const express = require("express");
require("dotenv").config();
const app = express();
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");
const server = http.createServer(app);
const authRoute = require("./route/auth.route");
const createDB = require("./db/createDB");
const createTables = require("./db/pgDbInIt");
const convoRoute = require("./route/conversations.route");
const auth = require("./middleware/auth.middleware");
const msg = require("./route/messages.route");
const initSocket = require("./socket");
const userRoute = require("./route/user.route");

async function initializeDatabase() {
  try {
    await createDB();
    await createTables();
    console.log("Database and tables initialized successfully.");
  } catch (err) {
    console.error("Error during database initialization:", err);
  }
}
initializeDatabase();

initSocket.initsocket(server);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve("./public")));
app.use("/auth", authRoute);
app.use("/conversations", auth.authenticate, convoRoute);
app.use("/message", auth.authenticate, msg);
app.use("/users", userRoute);

app.get("/", (req, res) => {
  return res.sendFile(path.resolve("./public/register.html"));
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, console.log(`Listening at ${PORT}`));
