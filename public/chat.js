var socket = io.connect('http://localhost:3019/')

// query dom

var message = document.getElementById('message')
var handle = document.getElementById('handle')
var btn = document.getElementById('send')
var output = document.getElementById('output')
var feedback = document.getElementById('feedback')

btn.addEventListener('click', function(){
  var text = cry(message.value, 300)
  socket.emit('chat', {
    message: text,
    handle: handle.value
  })
})

message.addEventListener('keypress', function(){
  socket.emit('typing', handle.value)
})
// listen for addEventListener

socket.on('chat', function(data){
  feedback.innerHTML = ""
  output.innerHTML += '<p><b>' + data.handle + ':</b> ' + data.message + '</p>'
})

socket.on('typing', function(data){
  feedback.innerHTML = '<p><b>' + data + ' is typing a message...</b><p>'
})

function gotoBottom(id){
   var element = document.getElementById('window');
   element.scrollTop = element.scrollHeight - element.clientHeight;
}
