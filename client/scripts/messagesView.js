var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  renderMessage: function(message) {

    var post = MessageView.render(message);
    console.log(post)
    $('#chats').append(post)
    
  }
};

