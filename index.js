var fs = require('fs');
var data = fs.readFileSync('data.json');
var words = JSON.parse(data);

var express = require('express');

var socket = require('socket.io');

// App setup
var app = express();
var server = app.listen(4000, function(){
    console.log('listen to requests on port 4000');
});

// static files
app.use(express.static('public'));

// socket setup
var io = socket(server);

// io connection
io.on('connection', function(socket){

    socket.on('chat', function(data){
        // check input length
        if (data.message.length > 10){
            console.log(words['return']['error']);
        } else {
            io.sockets.emit('chat', data);
            // add words and update data on json file
            words['data'][socket.id] = data.message;
            json = JSON.stringify(words, null, 2);
            fs.writeFile('data.json', json, function(){
                console.log(words['return']['success']);
            });
        }
    });
});