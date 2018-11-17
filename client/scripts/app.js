var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    // Parse.readAll((item) => {
    //   Messages[item[username]] = item
    // });
    // setTimeout( )

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
  
};

var message = {
  username: 'michael',
  text: 'hello',
  roomname: 'inside'
};

var something = MessageView.render;

$('#chats').append(something(message));
function addFriend() {
  Friends.toggleStatus();
};

function addRoom(room) {
  Rooms.add(room);
};


$('form .submit').on('click', (e) => {
  var sessage = $('#message').val();
  var message = {
    username: 'Michael',
    text: 'MichaelwasHere',
    roomname: 'What',
  };
  console.log(message);
  Parse.create(message);
});
