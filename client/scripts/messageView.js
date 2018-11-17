// var MessageView = {

//   render: _.template(`
//       <!--
//       <div class="chat">
//         <div class="username"></div>
//         <div></div>
//       </div>
//       -->
    
//     '<div><%= username %></div>'
//     )

// };

var MessageView = {
  render: _.template( `<div><div class='username' onclick='addFriend()'><%= username %></div>
      <div><%= text %></div>
      <div><%= roomname %></div>
      </div>
      `),
};