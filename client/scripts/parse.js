var Parse = {

  server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,
 // successCB, errorCB = null
  create: function(message, successCB, errorCB = null) {
    $.ajax({
    url: Parse.server,
    type: 'POST',
    data: JSON.stringify(message),
    // data: $(this).serialize,//JSON.stringify(message),
    contentType: 'application/json',
    success: successCB,
    error: errorCB
  });
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};

$('form .submit').on('click', (e) => {
  var textInput = $('#message').val();
  var message = {
    username: 'Michael',
    text: textInput,
    roomname: 'What',
  };

  Parse.create(message);
});
