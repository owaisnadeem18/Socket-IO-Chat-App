const socket = io('http://localhost:8000');

const form = document.getElementById("send-container")
const messageInput = document.getElementById("messageInp")
const messageContainer = document.querySelector(".chat-container")

const name = prompt("Enter Your Full Name: ")

const appendNewMsgFunction = (message , position) => {
    const createNewElem = document.createElement("div")
    createNewElem.classList.add("message")
    createNewElem.classList.add(position)
    createNewElem.append(message)
}

socket.emit("new-user-joined" , name)

socket.on("user-joined" , name => {
    appendNewMsgFunction(`{name} joined the chat` , "center" )
})