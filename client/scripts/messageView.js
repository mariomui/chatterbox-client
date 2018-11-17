var MessageView = {
  render: _.template( `<div><div class='username' onclick='addFriend()'><%= username %></div>
      <div><%= text %></div>
      <div><%= roomname %></div>
      </div>`),
};