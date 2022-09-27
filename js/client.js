const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');
const messageInp = document.getElementById('messageInp');
const messageContainer = document.querySelector(".container");

const append = (message , position) => {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
}

const iname = prompt("Enter your name to join");
socket.emit('new-user-joined', iname);

socket.on('user-joined', iname => {
    append(`${iname} joined the chat`,'right');
})
