const socket = io('http://localhost:8000');

const form = document.getElementById("send-container")
const messageInput = document.getElementById("messageInp")
const messageContainer = document.querySelector(".message-container")

const name = prompt("Enter Your Full Name: ")

const appendNewMsgFunction = (message , position) => {
    const createNewElem = document.createElement("div")
    createNewElem.innerText = message
    createNewElem.classList.add("message")
    createNewElem.classList.add(position)
    messageContainer.append(createNewElem)
}

socket.emit("new-user-joined" , name)

socket.on("user-joined" , name => {
    appendNewMsgFunction(`${name} joined the chat` , "center" )
})