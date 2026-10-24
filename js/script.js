const socket = io('http://localhost:8000');

const form = document.getElementById("send-container")
const messageInput = document.getElementById("messageInp")
const messageContainer = document.querySelector(".chat-container")

const name = prompt("Enter Your Full Name: ")

socket.emit("new-user-joined" , name)
