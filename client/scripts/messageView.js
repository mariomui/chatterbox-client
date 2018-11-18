var MessageView = {
  render: _.template( `<div class='sheet'><div class='username' onclick='addFriend()'><%= username %></div>
      <div class='text'><%- text %></div>
      <div class='roomname'><%- roomname %></div>
      </div>`),
};