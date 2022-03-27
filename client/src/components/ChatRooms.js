//Importing these
import React from "react";
import { useState, useEffect } from "react";
import "../App.css";

//In charge of the chat
function ChatRooms(props) {

  //Using useState to change the chat as new messages are entered
  const [chat, setChat] = useState([]);

  //Async function for fetching the data entered
  useEffect(() => {
    let fetchChat = async () => {
      //Fetching chat from back-end
      let response = await fetch("http://localhost:8000/data");
      //Awaiting data
      let chatData = await response.json();
      //Using chatData as argument for useState function
      setChat(chatData);
    }
    //Calling the fetchChat function
    fetchChat();
  })
    
  return (
    <section>
      <h2 className="titles">
        Current Room: {props.room}
      </h2>
      <body className="chatBox">
        {chat.map((message) => {
          return (
            <div key={message._id}>
              <p>{message.timeSent}</p>
              <p>{message.room}</p>
            <p>{message.creatorName}: {message.textBody}</p>
            </div>
          )
        })}
      </body>
      <form className="form" action="/create" method="POST">
        <input className="input"
          placeholder="Username"
          type="text"
          name="creatorName"
          required
        />
        <input className="input" placeholder="User message" type="text" name="textBody" />
        <input className="button" type="submit" value="SEND" />
        <button className="button">Refresh</button>
      </form>
    </section>
  );
}

//Export this function
export default ChatRooms;
