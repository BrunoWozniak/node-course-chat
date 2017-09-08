const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '/../public');
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
   console.log('New user connected');

   socket.emit('newMessage', {
      from: 'bruno@server.com',
      text: 'This is a new message from server',
      createdAt: 1234567890
   });

   socket.on('createMessage', (message) => {
      console.log('New message received', message);
   });

   socket.on('disconnect', () => {
      console.log('User disconnected');
   });
});

server.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
