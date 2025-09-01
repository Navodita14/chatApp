const express= require('express')
require('dotenv').config()
const app= express();
const http= require('http')
const path= require('path')
const {Server}= require('socket.io');
const server= http.createServer(app)
const io= new Server(server)

const createDB = require("./db/createDB")
(async () => {
  await createDB().catch((err) => {
    console.error("error creating database", err);
  });
});

const createTables = require("./db/pgDbInIt")
(async () => {
  await createTables().catch((err) => {
    console.error("error creating Tables", err);
  });
});

io.on('connection', (socket)=>{
    socket.on('user-message',(message)=>{
        console.log("A new message", message);
        
    })
})

app.use(express.static(path.resolve('./public')))
app.get('/', (req,res)=>{
    return res.sendFile("/public/index.html")
})


const PORT= process.emit.PORT || 3000
server.listen(PORT, console.log(`Listening at ${PORT}`))