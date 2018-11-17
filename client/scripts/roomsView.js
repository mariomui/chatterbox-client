var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  
  var room = $('.room-name').val();
    // console.log(room);
  
  $('#room').on('click', () => {addRoom(room)});
      
  },
  
    
  renderRoom: function(str) {
    var something =_.template(`<div>${str}</div>`);
    $('#rooms select').append(something(str)); //>> div micheal div

  }
};
