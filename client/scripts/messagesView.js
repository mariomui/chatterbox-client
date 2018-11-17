var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  renderMessage: function(message) {
    MessageView.render(message);
    
  }

};

// $('.username').on('click', function() { Friends.toggleStatus.restore()});
