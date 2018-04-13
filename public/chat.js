// var socket = io.connect('http://localhost:3019/')

var socket = io()

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
  gotoBottom()
})

socket.on('typing', function(data){
  feedback.innerHTML = '<p><b>' + data + ' is crying...</b><p>'
})

function gotoBottom(id){
   var element = document.getElementById('window');
   //var output = document.getElementById('output');
   element.scrollTop = element.scrollHeight - element.clientHeight;
   // if (output.clientHeight > element.clientHeight) {
   //   output.style.setProperty('--scroll', `${output.clientHeight - element.clientHeight}px`)
   // }


}
