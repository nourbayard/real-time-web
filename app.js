const express = require('express')
const app = express();

const http = require('http').Server(app)
const io = require('socket.io')(http)
const port = 3033
const bodyParser = require('body-parser')

// var io = require('socket.io')(http)
// app setup

//static files
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));

// socket setup


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

http.listen(process.env.PORT || port, function(){
  console.log('listening on localhost:' + port);
});
