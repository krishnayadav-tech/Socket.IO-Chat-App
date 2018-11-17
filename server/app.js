var path = require('path');
var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
var socketIO = require('socket.io');
var port = process.env.PORT || 3000;
var publicpath = path.join(__dirname,"../public");
var io = socketIO(server);
app.use(express.static(publicpath));


io.on('connection',(socket)=>{
    console.log("Connected");
    socket.emit("newEmail",{
        from:"krishna@krikalyt.com"
    });

    socket.on("fuck",(data)=>{
        console.log("this is the fucking data"+data.data);
    })
});
server.listen(port,()=>{
    console.log(`Application is Running on port ${port}`);
});