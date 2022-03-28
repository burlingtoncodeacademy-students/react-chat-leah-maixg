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
    
  //Returns the chat info
  return (
    <section>
      {/*Title of the room*/}
      <h2 className="titles">
        Current Room: {props.room}
      </h2>
      {/*This is the chat box*/}
      <body className="chatBox">
        {chat.map((message) => {
          {/*If the room in url matches current room*/}
          if (message.room === props.room) {
            {/*Return the chat info in this format*/}
          return (
            <div className="chatInfo" key={message._id}>
              <p>{message.timeSent}</p>
            <p>{message.creatorName}: {message.textBody}</p>
            </div>
          )
          }
        })}
      </body>
      {/*This is the form where user can submit input*/}
      <form className="form" action="http://localhost:8000/create" method="POST">
        <input className="input"
          placeholder="Username"
          type="text"
          name="creatorName"
          required
        />
        <input className="input" placeholder="User message" type="text" name="textBody" />
        <input type="hidden" name="room" value={props.room} />
        <input type="hidden" name="timeSent" value={new Date().toLocaleString()} />
        <input className="button" type="submit" value="SEND" />
        {/*Polling for new messages happens automatically when user submits input, so don't need this button*/}
        {/* <button className="button">Refresh</button> */}
      </form>
    </section>
  );
}

//Export this function
export default ChatRooms;
