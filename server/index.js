const express = require('express')
const app = express()
const server = require('http').createServer(app)
let io = require('socket.io')(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    }
  })
io.on("connection",(socket)=>{
    console.log("Co mot ket noi tu " + socket.id)
    
})
server.listen(9999,()=>console.log('Server started'))
