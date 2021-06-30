const io = require("socket.io")(3000);

const users={};

io.on('connection',socket => {
    socket.on('new-user-joined',name=>{
        // console.log("My name is ",name);
        users[socket.id]=name;
        // if(users.size()!=1)
        socket.broadcast.emit('user-joined',name);
    });

    socket.on('send',message => {
        socket.broadcast.emit('recieve',{message:message,name:users[socket.id]});
    });

    socket.on('disconnect',name=> {
        socket.broadcast.emit('leave',{name:users[socket.id]});
        delete users[socket.id];
    });
})