var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  
  // var room = $('.room-name').val();
  // $('#room').on('click', () => {addRoom(room)});
    var roomKeyList = Object.keys(Rooms.roomList);  
    // $().appendTo();
    // console.log(roomKeyList);
    RoomsView.updateRoomOptions(roomKeyList);
  },
  
 //not necessary   
  renderRoom: function(str) {
    var somethingFnc =_.template(`<div>${str}</div>`);
    $('#rooms select').append(somethingFnc(str)); //>> div micheal div

  },

  updateRoomOptions: function(roomKeyList) {
    // var keyTemplateFunction = _.template(`<option id >`)
    for (var i = 0; i < roomKeyList.length; i++) {
      if(document.getElementById(roomKeyList[i])) {
        console.log('hit');
      } else {
        $(`<option id='${roomKeyList[i]}' value='${roomKeyList[i]}'>${roomKeyList[i]}</option>`)
          .appendTo('#roomSelect');
        //     $('#roomSelect')
        //       .on('change', function () {
        //   MessagesView.renderAllMessages(document.getElementById('roomSelect').value);
        //   console.log(document.getElementById('roomSelect').value)
        // })

        
      }
    }
  }
  
};

