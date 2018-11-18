var Friends = {
  //object
    /*self: {
      mario: true,
      jack: true,
    }
    */
  friendsList: {},

  toggleStatus: function (friend) {
    console.log('hi');
    if (!this.friendsList[friend]) {
      this.friendsList[friend] = true;
    } else {
      this.friendsList[friend] = !this.friendsList;
    }
  }

};

function addFriend () {
  Friends.toggleStatus();
}

// ().click(e) {
//   e.target().val
// }

// Allow users to 'befriend' other users by clicking on their user name

//our present user.
//a click handler that stores the target friend username
// a function that would add a friend.
// Display all messages sent by friends in bold or with highlight