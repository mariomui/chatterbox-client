var MessagesView = {
  counter: 0,
  $chats: $('#chats'),

  initialize: function() {

  },

  renderMessage: function(message) {

    var post = MessageView.render(message);
    // console.log(post)
    
    $('#chats').append(post)

  },

  renderAllMessages: (keyStr) => {
    for(var i = 0; i < Messages._data.length; i++) {
      
      if(Messages._data[i].username === undefined || Messages._data[i].roomname === undefined || Messages._data[i].text === undefined) {
        continue;
      }
      var post = MessageView.render(Messages._data[i])
      $('#chats').append(post);
      $('.username')
        .click( (e) => {
        var targetUser = $(e.target).text();
      
        Friends.toggleStatus(targetUser);
      });
    }
  
    // for (var i = this.counter; i < Rooms.roomList[keyStr].length;i++) {

    //   this.renderMessage(Rooms.roomList[keyStr][i]);
    // }
    // this.counter = Rooms.roomList[keyStr].length;
  }
};

