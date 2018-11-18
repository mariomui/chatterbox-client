var MessagesView = {
  counter: 0,
  $chats: $('#chats'),

  initialize: function() {

  },

  renderMessage: function(message) {

    var post = MessageView.render(message);
    console.log(post)
    $('#chats').append(post)
    
  },

  renderAllMessages: (keyStr) => {
    for(var i = 0; i < textMessages.length; i++) {
      if(textMessages[i].username === undefined || textMessages[i].roomname === undefined || textMessages[i].text === undefined) {
        continue;
      }
      var post = MessageView.render(textMessages[i])
      $('#chats').append(post);
    }
  
    // for (var i = this.counter; i < Rooms.roomList[keyStr].length;i++) {

    //   this.renderMessage(Rooms.roomList[keyStr][i]);
    // }
    // this.counter = Rooms.roomList[keyStr].length;
  }
};

