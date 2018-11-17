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
    var foo = () => {
      Parse.readAll((item) => {
      // for (let key in item.results) {
      //   console.log(key);
      // }
      var jack = item.results[0].username || Math.random().toFixed(4).split('.')[1];
      // console.log(jack,'', item.results.username);
      Messages[jack] = item.results[Math.floor(Math.random()*3)];
        var room = item.results[0].roomname || 'lobby'
        Rooms.roomList[room] = item.results[Math.floor(Math.random()*3)]
      });
    };
    foo();
    //setTimeout( App.initialize, 1000 );

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
  var textInput = $('#message').val();
  var message = {
    username: 'Michael',
    text: textInput,
    roomname: 'What',
  };
  console.log(message);
  Parse.create(message);
});

