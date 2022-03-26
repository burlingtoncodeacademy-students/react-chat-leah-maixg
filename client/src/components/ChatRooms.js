//Importing these
import React from "react";
import "../App.css";

//In charge of the chat
function ChatRooms(props) {
  return (
    <section>
      <h2 className="titles">
        Current Room: {props.room}
      </h2>
      <div className="chatBox">This is where the chat will show up</div>
      <form className="form">
        <input className="input"
          placeholder="Username"
          type="text"
          username="username"
          required
        />
        <input className="input" placeholder="User message" type="text" message="message" />
        <button className="button">SEND</button>
        <button className="button">Refresh</button>
      </form>
    </section>
  );
}

//Export this function
export default ChatRooms;
