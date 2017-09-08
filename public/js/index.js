var socket = io();

socket.on('connect', () => {
   console.log('Connected to server');
   socket.emit('createMessage', {
      from: 'bruno@client.com',
      text: 'Message created from client side'
   });
});

socket.on('newMessage', function (message) {
   console.log('New message received', message);
});

socket.on('disconnect', () => {
   console.log('Disconnected from server');
});
