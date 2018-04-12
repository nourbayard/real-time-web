var express = require('express')
var socket = require('socket.io');
var port = 3019
var bodyParser = require('body-parser')

var http = require('http').Server(app)
var io = require('socket.io')(http)

// app setup
var app = require('express')();

var server = http.listen(process.env.PORT || port, function(){
  console.log('listening on localhost:' + port);
});

//static files
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));


// socket setup
var io = socket(server)

io.on('connection', function(socket){
  console.log('made socket connection', socket.id)

  // socket.broadcast.emit('newUser', socket.id);

  // socket.on('setUserName', function(name){
  //   socket.username = name;
  //   io.sockets.emit('newName', socket.id, socket.username); //Sends message to all sockets
  // });

  socket.on('chat', function(data){
    io.sockets.emit('chat', data)
  })

  socket.on('typing', function(data){
    socket.broadcast.emit('typing', data)
  })

});
