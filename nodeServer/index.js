//nodeserver which will handle socket io connection 
const io = require('socket.io')(9090)//sockect.io will listen to incoming events.this is also an instance of http.
const users = {};
io.on('connection',socket =>{
    socket.on('new-user-joined',name =>{
        console.log("New user",name);
        users[socket.id]=name;
        socket.broadcast.emit('user-joined',name);
    });
    socket.on('send',message =>{
        socket.broadcast.emit('recieve',{message: message, name: users[socket.
        id]})
    });    
})
