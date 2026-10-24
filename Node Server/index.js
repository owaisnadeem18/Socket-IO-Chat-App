
const { Server } = require('socket.io');

const io = new Server(8000, {
    cors: {
        origin: "http://127.0.0.1:5500",
        methods: ["GET", "POST"]
    }
});

let users = {};

io.on("connection", socket => {

     console.log("User connected:", socket.id);

    socket.on('new-user-joined', name => {
        console.log(name , " Joined the chat")
        users[socket.id] = name;
        console.log(users)
        socket.broadcast.emit('user-joined', name);
    });

    socket.on("send" , message => {
        socket.broadcast.emit("receive" , {message: message, name: users[socket.id]})
    })

} )