const socket = io('http://localhost:3000');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector(".container");


var audio=new Audio('name.mp3');

const append=(message,exClass,position)=>{
    const messageElement=document.createElement('div');
    messageElement.innerText=message;
    messageElement.classList.add(exClass);
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
    if(position=='left')
    {
        audio.play();
    }
}

form.addEventListener('submit',(e)=> {
    e.preventDefault();
    const message=messageInput.value;
    append(`You: ${message}`,'message','right');
    socket.emit('send',message);
    messageInput.value='';
})


const name=prompt("Enter Your name to Join");
socket.emit('new-user-joined',name);

socket.on('user-joined',name=>{
    append(`${name} joined the chat`,'newUser','center');
})

socket.on('recieve',data=>{
    append(`${data.name}: ${data.message}`,'message','left');
})

socket.on('leave',name=>{
    append(`${name} left the chat`,'message','left');
})