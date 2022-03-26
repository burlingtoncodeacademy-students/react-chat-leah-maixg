//Importing these
import React from "react";
import { useState } from "react";
import Links from "./components/Links.js";
import ChatRooms from "./components/ChatRooms.js";
import "./App.css";

//In charge of what's on all pages
function App() {
  // //Using useState to add message to chat when submitted
  // const [chat, setChat] = useState();

  //Using useState to change room title
  let [room, setRoom] = useState([]);

  return (
    <main className="wholePage">
      <h1 className="banner">Chat Rooms</h1>
      <section className="everythingUnderTheBanner">
        <Links setRoom={setRoom}/>
        <ChatRooms room={room}/>
      </section>
    </main>
  );
}

//Export this function
export default App;
