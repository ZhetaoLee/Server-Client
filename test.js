console.log('Test input: Hello!');

var fs = require('fs');
var express = require('express');
var socket = require('socket.io');

// read json file
var data = fs.readFileSync('data.json');
var words = JSON.parse(data);

// App setup
var app = express();
var server = app.listen(4000, function(){
    // console.log('listen to requests on port 4000');
});

// static files
app.use(express.static('public'));

// socket setup
var io = socket(server);

// io connection
io.on('connection', function(socket){

    socket.on('chat', function(data){
        io.sockets.emit('chat', data);
    });
});

// add words and update data on json file
words['data']['Test Case'] = 'Hello!';
json = JSON.stringify(words, null, 2);
fs.writeFile('data.json', json, function(){
    console.log(words['return']['success'] + '! message ' + data.message + ' has been added to the data.json file');
});