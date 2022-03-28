//Importing these
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import ChatRooms from "./ChatRooms.js"
import "../App.css";

//In charge of the links to other pages
function Links(props) {
  //Else...if statements to set room name depending on room
  if (window.location.pathname === "/") {
    props.setRoom("General");
  } else if (window.location.pathname === "/food") {
    props.setRoom("Food");
  } else if (window.location.pathname === "/animals") {
    props.setRoom("Animals");
  } else if (window.location.pathname === "/fitness") {
    props.setRoom("Fitness");
  }

  return (
    <section>
      <h2 className="titles">Rooms</h2>
      <div className="links">
        <Link to="/">General</Link>
        <Link to="/food">Food</Link>
        <Link to="/animals">Animals</Link>
        <Link to="/fitness">Fitness</Link>
        <Routes>
          <Route path="/:room"></Route>
        </Routes>
      </div>
    </section>
  );
}

//Export this function
export default Links;
