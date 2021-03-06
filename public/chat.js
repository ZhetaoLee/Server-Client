// Make connection
var socket = io.connect('http://localhost:4000');

// Query DOM
var message = document.getElementById('message');
var btn = document.getElementById('send');
var output = document.getElementById('output');

// Emit events
btn.addEventListener('click', function(){
    socket.emit('chat', {
        message: message.value,
    });
});

// Listen for events
socket.on('chat', function(data){
    output.innerHTML += '<p>' + data.message + '</p>';
});