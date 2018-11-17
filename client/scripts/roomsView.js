var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    $('#rooms').on('click', addRoom())
  },

  renderRoom: function(str) {
    var something =_.template(`<div>${str}</div>`);
    $('#rooms select').append(something(str)); //>> div micheal div

  }
};
