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
        var flag = false;
        var dataObject = item.results[i];
        
        var checkInputList=['roomname','username','text'];
        var counter = 0;
        checkInputList.forEach( (item) => {
          if (!dataObject[item]) {
            dataObject[item] = 'lobby';
          }
        });

        checkInputList.forEach( (item) => {
          if (dataObject[item].match(/img/g)) {
            flag = true;
          }

        });
        if (flag === true) {
          continue;
        }
        var messagesSearchKey = dataObject.username || Math.random().toFixed(4).split('.')[1];
        Messages[messagesSearchKey] = dataObject;  

        var room = dataObject.roomname || 'lobby'
        // console.log(room)

        if(! (room in Rooms.roomList) ) {
          Rooms.roomList[room] = [];
          Rooms.roomList[room].push(dataObject);
        } else {
          Rooms.roomList[room].push(dataObject)
        }

      }
        item.results[Math.floor(Math.random()*3)]
      });
    };
    foo();
    setTimeout( App.initialize, 3000 );

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


// console.log('userName');
var addRoom = function() {
  Rooms.add();
};

var userName = window.prompt();


