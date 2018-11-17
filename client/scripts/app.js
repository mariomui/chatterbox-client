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

      for(var i = 0; i < 10; i++) {
      var jack = item.results[i].username || Math.random().toFixed(4).split('.')[1];

      Messages[jack] = item.results[i];
        
      }
        var room = item.results[0].roomname || 'lobby'
        Rooms.roomList[room] = item.results[Math.floor(Math.random()*3)]
      });
    };
    foo();
    setTimeout( App.initialize, 1000 );

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



var addRoom = function() {
  Rooms.add();
};



