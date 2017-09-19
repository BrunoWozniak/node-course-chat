var socket = io();

socket.on('connect', function() {
   socket.on('updateRoomList', function(rooms) {
      if (rooms.length) {
         // console.log('There are rooms');
         var roomList = '<option>Select</option>';
         rooms.forEach(function(room) {
            roomList = roomList.concat('<option>', room, '</option>');
         });
         // console.log('roomList = ', roomList);
         jQuery('#roomList')
            .html(roomList);
      } else {
         // console.log('No room available');
         // alert('No room available');
         jQuery('#roomList')
            .html('<option disabled="true" selected>No room available</option>');
      }
   });
});

$('#roomList')
   .change(function() {
      $("select option:selected")
         .each(function() {
            selectedRoom = $(this)
               .val();
         });
      // console.log(str);
      if (selectedRoom === 'Select') {
         $("#room")
            .val('');
      } else {
         $("#room")
            .val(selectedRoom);
      }
   });
