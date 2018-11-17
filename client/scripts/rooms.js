var Rooms = {
  roomList: {},
  add: function(room) {
    this.roomList.room = true;
    var room = $('.room-name').val()
    $(`<option>${room}</option>`).appendTo('#roomSelect');
  }

};