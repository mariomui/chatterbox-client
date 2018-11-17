var Rooms = {
  roomList: {},
  add: function(room) {

    var room = $('.room-name').val()
    $(`<option>${room}</option>`).appendTo('#roomSelect');
  }

};
$('#rooms').on('click', function() {
  Rooms.add()
})

function addRoom () {
  Rooms.add();
};